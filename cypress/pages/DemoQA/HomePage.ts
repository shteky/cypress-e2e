export class HomePage {
  readonly homepageElements = [
    '.category-cards a[href="/elements"]',
    '.category-cards a[href="/forms"]',
    '.category-cards a[href="/alertsWindows"]',
    '.category-cards a[href="/widgets"]',
    '.category-cards a[href="/interaction"]',
  ];

  readonly elementsLabels = [
    'Elements',
    'Forms',
    'Alerts, Frame & Windows',
    'Widgets',
    'Interactions',
  ];

  readonly selectors = {
    header: 'header',
    categoryCards: '.category-cards',
    elements: '.category-cards a[href="/elements"]',
    forms: '.category-cards a[href="/forms"]',
    alertsFrames: '.category-cards a[href="/alertsWindows"]',
    widgets: '.category-cards a[href="/widgets"]',
    interactions: '.category-cards a[href="/interaction"]',
    bookStoreApp: '.category-cards a[href="/books"]',
  };

  visit(): void {
    cy.visit(Cypress.env('demoQA'));
    cy.get(this.selectors.categoryCards).should('be.visible');
  }

  openElements(): void {
    cy.clickElement(this.selectors.elements);
  }

  openBookStoreApp(): void {
    cy.clickElement(this.selectors.bookStoreApp);
  }
}

export const homePage = new HomePage();
