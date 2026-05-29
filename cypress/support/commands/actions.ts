Cypress.Commands.add('clickElement', (selector: string) => {
  cy.get(selector).click();
});

Cypress.Commands.add('clickFirstElement', (selector: string) => {
  cy.get(selector).first().click();
});

Cypress.Commands.add('clickLastElement', (selector: string) => {
  cy.get(selector).last().click();
});

Cypress.Commands.add('doubleClickElement', (selector: string) => {
  cy.get(selector).dblclick();
});

Cypress.Commands.add('rightClickElement', (selector: string) => {
  cy.get(selector).rightclick();
});

Cypress.Commands.add('clickElementContaining', (selector: string, value: string) => {
  cy.contains(selector, value).click();
});

Cypress.Commands.add('typeInElement', (selector: string, text: string) => {
  cy.get(selector).type(text);
});

Cypress.Commands.add('clearElement', (selector: string) => {
  cy.get(selector).clear();
});

Cypress.Commands.add('checkElement', (selector: string) => {
  cy.get(selector).check();
});

Cypress.Commands.add('uncheckElement', (selector: string) => {
  cy.get(selector).uncheck();
});

Cypress.Commands.add('selectElementValue', (selector: string, option: string) => {
  cy.get(selector).select(option);
});

Cypress.Commands.add('scrollToElement', (selector: string) => {
  cy.get(selector).scrollIntoView();
});

Cypress.Commands.add('assertWindowAlert', (expectedText: string) => {
  cy.on('window:alert', (text) => {
    expect(text).to.equal(expectedText);
  });
});

Cypress.Commands.add('assertConfirmAlert', (expectedText: string) => {
  cy.on('window:confirm', (text) => {
    expect(text).to.equal(expectedText);
  });
});

Cypress.Commands.add('openInNewTab', (selector: string, removeAttribute: string) => {
  cy.get(selector).invoke('removeAttr', removeAttribute).click();
});

Cypress.Commands.add('visitAndVerifyPage', (page: string, checkingElement: string) => {
  cy.intercept('**/users/getData**', (req) => {
    req.on('before:response', (res) => {
      res.headers['cache-control'] = 'no-store';
    });
  }).as('getData');

  cy.visit(`${Cypress.env('appUrl')}${page}`);
  cy.wait('@getData').should('include.all.keys', ['request', 'response']);
  cy.get(checkingElement).should('be.visible');
});
