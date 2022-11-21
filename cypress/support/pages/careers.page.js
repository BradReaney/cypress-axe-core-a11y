import { CAREERS } from '../../fixtures/href.json';

export function getCareersButton() {
    cy.get(`a[href="${CAREERS}"] > .menu-title-text`).click();
}

export function assertCareersPageText() {
    cy.get('.wpb_wrapper > h4 > span').should('contain', 'Our core value, that drives everything we do:')
}