import { config } from './env';

export async function fetchVerificationCode(): Promise<string> {
  switch (config.otpStrategy) {
    case 'mailslurp':
      return fetchFromMailslurp();
    case 'imap':
      return fetchFromImap();
    default:
      return fetchManually();
  }
}

async function fetchFromMailslurp(): Promise<string> {
  if (!config.mailslurpApiKey || !config.mailslurpInboxId) {
    throw new Error(
      'OTP_STRATEGY=mailslurp but MAILSLURP_API_KEY / MAILSLURP_INBOX_ID are not set in .env'
    );
  }

  const url =
    `https://api.mailslurp.com/waitForLatestEmail` +
    `?inboxId=${config.mailslurpInboxId}&timeout=60000&unreadOnly=true`;

  const res = await fetch(url, {
    headers: { 'x-api-key': config.mailslurpApiKey },
  });

  if (!res.ok) {
    throw new Error(`MailSlurp request failed: ${res.status} ${res.statusText}`);
  }

  const email = (await res.json()) as { subject?: string; body?: string };
  const body = `${email.subject ?? ''} ${email.body ?? ''}`;
  return extractCode(body);
}

async function fetchFromImap(): Promise<string> {
  if (!config.imapHost || !config.imapUser || !config.imapAppPassword) {
    throw new Error(
      'OTP_STRATEGY=imap but IMAP_HOST / IMAP_USER / IMAP_APP_PASSWORD are not set in .env'
    );
  }

  const { ImapFlow } = await import('imapflow');
  const { simpleParser } = await import('mailparser');

  const client = new ImapFlow({
    host: config.imapHost,
    port: 993,
    secure: true,
    auth: {
      user: config.imapUser,
      pass: config.imapAppPassword,
    },
    logger: false,
  });

  await client.connect();

  try {
    const lock = await client.getMailboxLock('INBOX');
    try {

      const deadline = Date.now() + 60_000;
      let uid: number | undefined;

      while (Date.now() < deadline) {
        const results = await client.search({
          from: 'salesforce.com',
          seen: false,
        });

        if (results && results.length > 0) {
          uid = Math.max(...results);
          break;
        }

        await new Promise((resolve) => setTimeout(resolve, 3000));
      }

      if (!uid) {
        throw new Error('Timed out waiting for a Salesforce verification email to arrive via IMAP.');
      }

      const message = await client.fetchOne(uid, { source: true });
      if (!message || !message.source) {
        throw new Error('Could not fetch the matched Salesforce email body.');
      }

      const parsed = await simpleParser(message.source);
      const body = `${parsed.subject ?? ''} ${parsed.text ?? ''}`;

  
      await client.messageFlagsAdd(uid, ['\\Seen']);

      return extractCode(body);
    } finally {
      lock.release();
    }
  } finally {
    await client.logout();
  }
}


async function fetchManually(): Promise<string> {

  console.log('\n>>> Check your inbox for the Salesforce verification code.');
  const readline = await import('readline/promises');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const code = await rl.question('Enter the 6-digit Salesforce verification code: ');
  rl.close();
  return code.trim();
}

function extractCode(text: string): string {
  const match = text.match(/\b(\d{6})\b/);
  if (!match) {
    throw new Error(`Could not find a 6-digit verification code in email content: "${text.slice(0, 200)}"`);
  }
  return match[1];
}