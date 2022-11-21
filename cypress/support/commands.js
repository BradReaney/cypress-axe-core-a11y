// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('performA11yTests', standards =>
    cy.checkA11y(null, {
        runOnly: {
            type: 'tag',
            values: standards
        }
    }, null, true)
)

Cypress.Commands.add('checkPageA11y', (path) => {
    cy.visit(path);
    cy.injectAxe();
    cy.checkA11y(null, null, callback, true);
})

export function runA11yTests(wcagOptions, impactLevel, continueOnFail) {
    cy.injectAxe();
    cy.checkA11y(null, {
        runOnly: {
            type: 'tag',
            values: wcagOptions
        },
        includedImpacts: impactLevel
    }, null, continueOnFail);
}
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })