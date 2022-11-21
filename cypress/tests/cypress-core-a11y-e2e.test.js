import { assertHomePageLogoIsPresent } from '../support/pageObjects/home.page'
import { getWhatWeDoButton, assertWhatWeDoHeadingText } from '../support/pageObjects/whatWeDo.page'
import { getSuccessStoriesButton, assertSuccessStoriesHeadingText } from '../support/pageObjects/successStores.page'
import { getAboutNimbleButton, assertAboutNimblePageText } from '../support/pageObjects/aboutNimble.page'
import { getBlogButton, assertBlogPageText } from '../support/pageObjects/blog.page'
import { getCareersButton, assertCareersPageText } from '../support/pageObjects/careers.page'
import { getContactUsButton, assertContactUsPageText } from '../support/pageObjects/contactUs.page'
import { runA11yTests } from '../support/helpers'

const wcagStandards = ['wcag2aa'];
const impactLevel = ['critical', 'serious'];
const continueOnFail = false;
/**
 * You can have the 'runA11yTests' funtion in a afterAll but
 * if you have the 'continueOnFail' option set to false
 * it will skip any future tests.
 */

describe('Performs a11y tests on a collection of pages on the Nimble website', () => {

    it('Run axe a11y tests on the Nimble homepage', () => {
        cy.visit('/');
        assertHomePageLogoIsPresent();
        runA11yTests(wcagStandards, impactLevel, continueOnFail);
    });

    it('Run axe a11y tests on the Nimble "What we do" page', () => {
        getWhatWeDoButton();
        assertWhatWeDoHeadingText();
        runA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Success Stories" page', () => {
        getSuccessStoriesButton();
        assertSuccessStoriesHeadingText();
        runA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "About Nimble" page', () => {
        getAboutNimbleButton();
        assertAboutNimblePageText();
        runA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Blog" page', () => {
        getBlogButton();
        assertBlogPageText();
        runA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Careers" page', () => {
        getCareersButton();
        assertCareersPageText();
        runA11yTests(wcagStandards, impactLevel, continueOnFail);
    })

    it('Run axe a11y tests on the Nimble "Contact Us" page', () => {
        getContactUsButton();
        assertContactUsPageText();
        runA11yTests(wcagStandards, impactLevel, continueOnFail);
    })
});