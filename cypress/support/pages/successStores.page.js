import { SUCCESSSTORIES } from '../../fixtures/href.json';

export function moveTooSuccessStoriesPage() {
    cy.getByClassAndHref('sf-with-ul', SUCCESSSTORIES)
      .click()
}

export function assertSuccessStoriesHeadingText() {
    cy.get('#menu-item-6741 > .sf-with-ul > .menu-title-text')
      .should('contain', 'Success Stories');
}