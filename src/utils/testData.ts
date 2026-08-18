const FIRST_NAMES = ['Ava', 'Noah', 'Liam', 'Mia', 'Ethan', 'Zoe', 'Kai', 'Priya', 'Omar', 'Lucia'];
const LAST_NAMES = ['Turner', 'Nakamura', 'Silva', 'Okafor', 'Petrov', 'Nguyen', 'Farrell', 'Rossi'];
const COMPANY_SUFFIXES = ['Systems', 'Holdings', 'Technologies', 'Group', 'Solutions', 'Industries'];
const LEAD_SOURCES = ['Web', 'Phone Inquiry', 'Partner Referral', 'Purchased List', 'Other'];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function runId(): string {
  return `${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export interface LeadData {
  firstName: string;
  lastName: string;
  company: string;
  leadSource: string;
  email: string;
  phone: string;
  title: string;
}

export function generateLead(): LeadData {
  const id = runId();
  const firstName = pick(FIRST_NAMES);
  const lastName = `${pick(LAST_NAMES)}${id.slice(-4)}`; 
  const company = `${pick(LAST_NAMES)} ${pick(COMPANY_SUFFIXES)} ${id.slice(-4)}`;

  return {
    firstName,
    lastName,
    company,
    leadSource: pick(LEAD_SOURCES),
    email: `qa.${firstName}.${lastName}.${id}@example-testmail.com`.toLowerCase(),
    phone: `+1415555${id.slice(-4)}`,
    title: 'QA Automation Contact',
  };
}

export function generateDuplicateEmailLead(existingEmail: string): LeadData {
  const base = generateLead();
  return { ...base, email: existingEmail };
}
