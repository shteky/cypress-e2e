const selectors = {
  header: 'header',
  categoryCards: '.category-cards',
  elements: '.category-cards a[href="/elements"]',
  forms: '.category-cards a[href="/forms"]',
  alertsFrames: '.category-cards a[href="/alertsWindows"]',
  widgets: '.category-cards a[href="/widgets"]',
  interactions: '.category-cards a[href="/interaction"]',
  bookStoreApp: '.category-cards a[href="/books"]',
};

const homepageElements = [
  selectors.elements,
  selectors.forms,
  selectors.alertsFrames,
  selectors.widgets,
  selectors.interactions,
];

const elementsLabels = [
  'Elements',
  'Forms',
  'Alerts, Frame & Windows',
  'Widgets',
  'Interactions',
];

Cypress.Commands.add('visitHomePage', () => {
  cy.visit(Cypress.env('demoQA'));
  cy.get(selectors.categoryCards).should('be.visible');
});

Cypress.Commands.add('openElementsPage', () => {
  cy.clickElement(selectors.elements);
});

Cypress.Commands.add('openBookStoreApp', () => {
  cy.clickElement(selectors.bookStoreApp);
});

Cypress.Commands.add('assertHomepageCategoryCards', () => {
  homepageElements.forEach((selector) => {
    cy.assertElementVisible(selector);
  });
});

Cypress.Commands.add('assertHomepageCategoryLabels', () => {
  homepageElements.forEach((selector, index) => {
    cy.assertContainsText(selector, elementsLabels[index]);
  });
});

Cypress.Commands.add('assertElementsCategoryCardVisible', () => {
  cy.assertElementVisible(selectors.elements);
});

export {};
