import { ABOUTNIMBLE } from '../../fixtures/href.json';

export function moveTooAboutNimblePage() {
    cy.get(`a[href="${ABOUTNIMBLE}"] > .menu-title-text`)
      .click();
}

export function assertAboutNimblePageText() {
    cy.get('.vc_col-sm-3 > .vc_column-inner > :nth-child(1) > .wpb_text_column > .wpb_wrapper > h2')
      .should('contain', 'Who are Nimble Approach?');
}