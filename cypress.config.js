const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    e2e: {
      baseUrl: "http://nimbleapproach.com",
      defaultCommandTimeout: 10000,
      viewportWidth: 1920,
      viewportHeight: 1080,
    },
  },
});
