import { homePage } from '../../../pages/DemoQA/HomePage';

beforeEach(() => {
  homePage.visit();
});

describe('DemoQA - Elements', () => {
  it('DemoQA - Elements page', () => {
    for (let index = 0; index < homePage.homepageElements.length; index++) {
      cy.assertElementVisible(homePage.homepageElements[index]);
    }

    for (let index = 0; index < homePage.elementsLabels.length; index++) {
      cy.assertContainsText(homePage.homepageElements[index], homePage.elementsLabels[index]);
    }
  });
});
