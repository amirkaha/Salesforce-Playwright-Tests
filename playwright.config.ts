import { defineConfig, devices } from '@playwright/test';
import { config } from './src/utils/env';

export default defineConfig({
  testDir: 'src/tests',
  globalSetup: require.resolve('./global-setup'),
  timeout: 250_000,
  expect: { timeout: 150_000 },

  // Parallel execution across files/workers. Test data is generated
  // per-test (see src/utils/testData.ts) so parallel Leads never collide.
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  retries: process.env.CI ? 1 : 0,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],

  use: {
    baseURL: config.baseUrl,
    storageState: config.storageStatePath,
    headless: false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 50_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
