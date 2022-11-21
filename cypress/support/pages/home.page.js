export function assertHomePageLogoIsPresent() {
    cy.get('.starting-logo.default-logo')
      .should('be.visible');
}