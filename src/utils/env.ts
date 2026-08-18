import * as dotenv from 'dotenv';
dotenv.config();

function required(name: string, fallback?: string): string {
  const val = process.env[name] ?? fallback;
  if (val === undefined) {
    throw new Error(`Missing required env var: ${name}. Did you copy .env.example to .env?`);
  }
  return val;
}
export const config = {
  sfLoginUrl: required('SF_LOGIN_URL', 'https://login.salesforce.com'),
  sfUsername: process.env.SF_USERNAME ?? '',
  sfPassword: process.env.SF_PASSWORD ?? '',
  sfSecurityToken: process.env.SF_SECURITY_TOKEN ?? '',

  otpStrategy: (process.env.OTP_STRATEGY ?? 'mailslurp') as 'mailslurp' | 'imap' | 'manual',
  mailslurpApiKey: process.env.MAILSLURP_API_KEY ?? '',
  mailslurpInboxId: process.env.MAILSLURP_INBOX_ID ?? '',
  imapHost: process.env.IMAP_HOST ?? '',
  imapUser: process.env.IMAP_USER ?? '',
  imapAppPassword: process.env.IMAP_APP_PASSWORD ?? '',

  headless: (process.env.HEADLESS ?? 'true') === 'true',
  storageStatePath: process.env.STORAGE_STATE_PATH ?? 'storage/storageState.json',
  baseUrl: process.env.BASE_URL ?? 'https://login.salesforce.com',
};
