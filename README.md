**`BASE_URL` must be your org's actual My Domain URL** (visible in the
   browser address bar once logged in — looks like
   `https://orgfarm-xxxxxxxxxx-dev-ed.develop.lightning.force.com`), not the
   generic `login.salesforce.com` gateway. Using the login gateway here
   causes the cached-session validity check to always report "invalid" and
   forces a fresh login (and OTP prompt) on every run.

## Running Tests

```bash
npm test                 # all tests, both browsers
npm run test:chromium    # Chromium only (recommended for local dev — faster)
npm run test:webkit      # WebKit only
npm run test:headed      # visible browser, useful for debugging
npm run test:debug       # Playwright Inspector step-through
```

Or target a specific file directly:
```bash
npx playwright test src/tests/leads/lead-creation.spec.ts --project=chromium
```

### Viewing the Report

```bash
 npx playwright show-report
```
Opens the HTML report with pass/fail status, traces, screenshots, and video
for any failed test.

## Cached Login / Session Reuse

`global-setup.ts` runs once before the suite:
1. If `storage/storageState.json` exists **and** a live check against
   `BASE_URL` confirms it's still valid, it's reused — no login happens.
2. Otherwise, it performs a full login, handling the email OTP identity
   challenge automatically (see below), then writes a fresh
   `storageState.json`.

**Session lifetime note:** this org's session can expire in as little as a
couple of hours (Setup → Session Settings). If tests suddenly start
re-prompting for OTP after previously working, this is expected —
`global-setup.ts` detects the expired session and re-authenticates
automatically rather than failing.

## Email Verification Handling (Part C.b)

Salesforce challenges any login from an unrecognized browser/device with a
6-digit email OTP. `src/utils/emailVerification.ts` supports three
strategies, selected via `OTP_STRATEGY` in `.env`:

| Strategy | How it works | Notes |
|---|---|---|
| `imap` (**what this project actually uses**) | Connects read-only to a real Gmail inbox via IMAP + an app password, polls for the Salesforce OTP email, extracts the code. | Chosen after finding that a disposable-inbox provider (MailSlurp) does **not** work with Salesforce's Spring '26 "verified sending domains" requirement — Salesforce silently fails to deliver identity-verification emails to unverified third-party domains, even though the recipient inbox itself is reachable. Public providers like Gmail/Outlook are explicitly exempt from that verification requirement, which is what makes IMAP-against-a-real-inbox the reliable path here. Requires only a free Gmail App Password, not your real account password. |
| `mailslurp` | Disposable-inbox API. | **Does not work against this org** for the reason above — kept in the codebase as a documented dead end, not a live option. |
| `manual` | Prompts in the terminal for a human to type the code from their inbox. | Fallback for first-time local runs without IMAP configured. |

**Setup for `imap`:**
1. Enable 2-Step Verification on the Gmail account: https://myaccount.google.com/security
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Set `IMAP_HOST=imap.gmail.com`, `IMAP_USER`, `IMAP_APP_PASSWORD` in `.env`
4. Ensure the Salesforce user's **Email** field (Setup → Users → your user)
   is set to that same Gmail address, so the OTP actually lands there.

**Cache invalidation resilience:** `global-setup.ts` doesn't just check
`fs.existsSync()` — it opens a throwaway context with the cached state and
does a real navigation against `BASE_URL`; if bounced to `/login`, a fresh
login (OTP included) runs automatically.

## Test Data Cleanup

`global-teardown.ts` runs once after the full suite finishes. It queries
Salesforce's REST API for Leads matching the test-data email pattern
(`qa.%example-testmail.com`, from `generateLead()`) and deletes them, using
the session token from `storageState.json` — no separate OAuth setup needed.

## Test Data Strategy

Lead data is generated **client-side, per-test** (`src/utils/testData.ts`),
with a run-unique numeric suffix baked into last name, company name, and
email, so parallel test workers never collide on the same record. Leads are
created via the actual UI form (not API-seeded), since Lead creation *is*
one of the flows under test per the assessment brief.

- **Lead Path stages** use `role="option"` (`<a>` tags), not `role="button"`
  as generic examples might suggest.
- **The "Mark as Current Status" confirmation button** lives outside the
  Path nav container, as a standalone `<button>`.

## Known Gaps / What I'd Do With More Time

- Instead of teardown, I will delete any automation test data from previous runs
  in global set up before tests run.
- Teardown only removes Leads, not downstream Accounts/Contacts/
  Opportunities created via conversion.
- The "existing Account/Contact" conversion branch currently depends on a
  manually pre-created matching record in the org; a fully self-contained
  test would create that matching record via API immediately before the
  UI conversion step.
- Instead of using UI to navigate, I will go straight to URL when applicable
  (eg for lead creation)


### Part C.a — Shadow DOM / Dynamic Component Evidence

**Component:** Lead Status Path stage links.

**Why a naive locator failed:** The first attempt used
`getByRole('button', { name: newStatus })` to click a Path stage, which
timed out after 50 seconds with zero matches. DevTools inspection revealed
the real element is an `<a>` tag with `role="option"`, not a button:
```html
<a aria-selected="false" role="option" tabindex="-1"
   title="Working - Contacted" class="tabHeader slds-path__link"
   data-aura-rendered-by="4901:0" href="javascript:void(0);">
  <span class="title slds-path__title">Working - Contacted</span>
</a>
```
The `data-aura-rendered-by` id was confirmed to regenerate on every page
load by comparing the same stage's markup across two separate loads.

**Locator used instead:**

const stage = this.statusPath.getByRole('option', { name: newStatus });

**Why it's stable:** Salesforce's Path component renders stages with ARIA
`role="option"` as part of its accessibility contract for screen readers —
this role and the visible label text are what the component must expose
consistently, unlike `data-aura-rendered-by`, which regenerates on every
render pass and cannot be relied on across sessions.

A related finding: the "Mark as Current Status" confirmation button that
appears after selecting a stage is a real `<button>` but lives **outside**
the Path's nav container, in a separate wrapper — a locator scoped to
`.slds-path__nav` cannot find it; it must be queried against the page root.