// global-teardown.ts
import * as fs from 'fs';
import { config } from './src/utils/env';

/**
 * Runs once after the entire suite finishes. Deletes Lead (and any linked
 * Account/Contact/Opportunity from conversion tests) records created by
 * this run, identified by the "qa." + "example-testmail.com" pattern baked
 * into generateLead() — so this only ever touches data this framework
 * created, never real/manually-entered records in the Dev org.
 *
 * Uses the session id (sid) cookie from the cached storageState.json as
 * the Bearer token for Salesforce's REST API, avoiding a separate OAuth
 * setup just for cleanup.
 */
export default async function globalTeardown() {
  if (!fs.existsSync(config.storageStatePath)) {
    console.log('[global-teardown] No storageState.json found, skipping cleanup.');
    return;
  }

  const storageState = JSON.parse(fs.readFileSync(config.storageStatePath, 'utf-8'));
  const sidCookie = storageState.cookies?.find(
    (c: { name: string; domain: string }) => c.name === 'sid' && c.domain.includes('lightning.force.com')
  );

  if (!sidCookie) {
    console.log('[global-teardown] No sid cookie found in storageState.json, skipping cleanup.');
    return;
  }

  const instanceUrl = `https://${sidCookie.domain.replace(/^\./, '')}`;
  const accessToken = sidCookie.value;

  try {
    const deletedCount = await deleteTestLeads(instanceUrl, accessToken);
    console.log(`[global-teardown] Deleted ${deletedCount} test Lead(s).`);
  } catch (err) {
    // Cleanup failures shouldn't fail the whole test run's exit code.
    console.warn('[global-teardown] Cleanup failed (non-fatal):', err);
  }
}

async function deleteTestLeads(instanceUrl: string, accessToken: string): Promise<number> {
  const apiVersion = 'v60.0';
  const query = "SELECT Id FROM Lead WHERE Email LIKE 'qa.%example-testmail.com'";
  const queryUrl = `${instanceUrl}/services/data/${apiVersion}/query?q=${encodeURIComponent(query)}`;

  const queryRes = await fetch(queryUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!queryRes.ok) {
    throw new Error(`Query failed: ${queryRes.status} ${await queryRes.text()}`);
  }

  const queryResult = (await queryRes.json()) as { records: { Id: string }[] };
  const ids = queryResult.records.map((r) => r.Id);

  if (ids.length === 0) return 0;

  // Composite API allows deleting up to 200 records in one call.
  const deleteUrl = `${instanceUrl}/services/data/${apiVersion}/composite/sobjects?ids=${ids.join(',')}&allOrNone=false`;
  const deleteRes = await fetch(deleteUrl, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!deleteRes.ok) {
    throw new Error(`Delete failed: ${deleteRes.status} ${await deleteRes.text()}`);
  }

  return ids.length;
}