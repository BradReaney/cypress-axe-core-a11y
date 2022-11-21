import { CONTACT } from '../../fixtures/href.json';

export function getContactUsButton() {
    cy.get(`a[href="${CONTACT}"] > .menu-title-text`).click();
}

export function assertContactUsPageText() {
    cy.get('h1').should('contain', 'Contact us.');
}