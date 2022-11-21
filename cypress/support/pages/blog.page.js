import { BLOG } from '../../fixtures/href.json';

export function moveTooBlogPage() {
    cy.get(`a[href="${BLOG}"] > .menu-title-text`)
      .click();
}

export function assertBlogPageText() {
    cy.get('.vc_custom_heading')
      .should('contain', 'Nimble Blog');
}