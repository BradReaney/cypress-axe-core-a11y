import { MANIFESTO } from '../../fixtures/href.json';

export function getManifestoButton() {
    cy.getByClassAndHref('c2a-btn', MANIFESTO).click()
}

export function assertHomePageLogoIsPresent() {
    cy.get('.starting-logo.default-logo').should('be.visible');
}