import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "3hrkhu",
  defaultCommandTimeout: 10000,

  env: {
    baseUrl: "http://localhost:3000",
  },

  downloadsFolder: "test/cypress/downloads",
  fixturesFolder: "test/cypress/fixtures",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
