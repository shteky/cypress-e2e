import { defineConfig } from 'cypress';

export default defineConfig({
  includeShadowDom: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  requestTimeout: 10000,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: true,
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
  retries: 0,
  env: {
    demoQA: 'https://demoqa.com/',
    bookStoreAPI: 'https://demoqa.com/swagger/',
    hideXHRInCommandLog: true,
  },
});
