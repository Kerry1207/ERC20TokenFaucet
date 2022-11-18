const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: "tests/integration/*.cy.{js,ts}",
    supportFile: "tests/support/index.js",
    setupNodeEvents(on, config) {
      require('cypress-metamask-v2/cypress/plugins')(on)
    }
  },
});
