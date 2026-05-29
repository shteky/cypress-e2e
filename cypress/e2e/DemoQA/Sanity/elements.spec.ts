import { homePage } from '../../../pages/DemoQA/HomePage';
import { elementsPage } from '../../../pages/DemoQA/ElementsPage';

beforeEach(() => {
  homePage.visit();
});

describe('DemoQA - Elements', () => {
  it('DemoQA - Elements page', () => {
    cy.assertElementVisible(homePage.selectors.elements);
    homePage.openElements();
    cy.url().should('contain', 'elements');
    cy.assertContainsText(elementsPage.selectors.menu.textbox, 'Text Box');

    cy.clickElement(elementsPage.selectors.menu.textbox);
    cy.clickElement(elementsPage.selectors.menu.checkbox);
    cy.clickElement(elementsPage.selectors.menu.links);
  });

  it('DemoQA - Text box output result', () => {
    homePage.openElements();

    elementsPage.openTextBox();
    cy.typeInElement(elementsPage.selectors.textboxMenu.name, 'John Doe');
    cy.typeInElement(elementsPage.selectors.textboxMenu.email, 'john.Doe@test.net');
    cy.typeInElement(
      elementsPage.selectors.textboxMenu.currentAddress,
      'Bulgaria, Sofia city, Lyulin 10 district'
    );
    cy.typeInElement(
      elementsPage.selectors.textboxMenu.permanentAddress,
      'Bulgaria, Stara Zagora city, Zheleznik district'
    );
    cy.clickElement(elementsPage.selectors.textboxMenu.submitBtn);
    cy.assertContainsText(elementsPage.selectors.textboxMenu.output, 'john.Doe@test.net');
  });
});
