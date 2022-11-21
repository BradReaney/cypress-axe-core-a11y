import { WHATWEDO } from '../../fixtures/href.json';

export function getWhatWeDoButton() {
    cy.getByClassAndHref('sf-with-ul', WHATWEDO).click()
}

export function assertWhatWeDoHeadingText() {
    cy.get('.row_col_wrap_12_inner > :nth-child(1) > .vc_column-inner > .wpb_wrapper > .vc_custom_heading').should('contain', 'What we do');
}