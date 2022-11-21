import { assertHomePageLogoIsPresent } from '../support/pages/home.page'
import { moveTooWhatWeDoPage, assertWhatWeDoHeadingText } from '../support/pages/whatWeDo.page'
import { moveTooSuccessStoriesPage, assertSuccessStoriesHeadingText } from '../support/pages/successStores.page'
import { moveTooAboutNimblePage, assertAboutNimblePageText } from '../support/pages/aboutNimble.page'
import { moveTooBlogPage, assertBlogPageText } from '../support/pages/blog.page'
import { moveTooCareersPage, assertCareersPageText } from '../support/pages/careers.page'
import { moveTooContactUsPage, assertContactUsPageText } from '../support/pages/contactUs.page'

const wcagStandards = ['wcag2aa'];
const impactLevel = ['critical', 'serious'];
const continueOnFail = false;
/**
 * You can have the 'cy.performA11yTests' command in an afterAll hook but
 * if you have the 'continueOnFail' option set to false
 * it will skip any future tests.
 */

describe('Performs a11y tests on a collection of pages on the Nimble website', () => {

    it('Run axe a11y tests on the Nimble homepage', () => {
        cy.visit('/');
        assertHomePageLogoIsPresent();
        cy.performA11yTests(wcagStandards, impactLevel, continueOnFail);
    });

    it('Run axe a11y tests on the Nimble "What we do" page', () => {
        moveTooWhatWeDoPage();
        assertWhatWeDoHeadingText();
        cy.performA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Success Stories" page', () => {
        moveTooSuccessStoriesPage();
        assertSuccessStoriesHeadingText();
        cy.performA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "About Nimble" page', () => {
        moveTooAboutNimblePage();
        assertAboutNimblePageText();
        cy.performA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Blog" page', () => {
        moveTooBlogPage();
        assertBlogPageText();
        cy.performA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Careers" page', () => {
        moveTooCareersPage();
        assertCareersPageText();
        cy.performA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Contact Us" page', () => {
        moveTooContactUsPage();
        assertContactUsPageText();
        cy.performA11yTests(wcagStandards, impactLevel, continueOnFail);
    })
});