const selectors = {
  menu: {
    textbox: '#item-0',
    checkbox: '#item-1',
    radioButton: '#item-2',
    webTables: '#item-3',
    buttons: '#item-4',
    links: '#item-5',
  },
  textboxMenu: {
    name: '#userName',
    email: '#userEmail',
    currentAddress: '#currentAddress',
    permanentAddress: '#permanentAddress',
    submitBtn: '#submit',
    output: '#output',
  },
  checkboxMenu: {
    dropdown: '.rct-collapse',
    home: '#tree-node-home',
    desktop: "[for='tree-node-desktop'] > .rct-checkbox",
    documents: "[for='tree-node-documents'] > .rct-checkbox",
    downloads: "[for='tree-node-downloads'] > .rct-checkbox",
  },
  radioButtonMenu: {
    yesBtn: "[for='yesRadio']",
    impressiveBtn: "[for='impressiveRadio']",
    noBtn: "[for='noRadio']",
    successMessage: '.mt-3',
  },
};

Cypress.Commands.add('openTextBoxPage', () => {
  cy.visit(`${Cypress.env('demoQA')}text-box`);
  cy.get(selectors.textboxMenu.name).should('be.visible');
});

Cypress.Commands.add('assertElementsTextBoxMenuLabel', () => {
  cy.assertContainsText(selectors.menu.textbox, 'Text Box');
});

Cypress.Commands.add('openElementsSidebarMenus', () => {
  cy.clickElement(selectors.menu.textbox);
  cy.clickElement(selectors.menu.checkbox);
  cy.clickElement(selectors.menu.links);
});

Cypress.Commands.add(
  'fillTextBoxForm',
  (name: string, email: string, currentAddress: string, permanentAddress: string) => {
    cy.typeInElement(selectors.textboxMenu.name, name);
    cy.typeInElement(selectors.textboxMenu.email, email);
    cy.typeInElement(selectors.textboxMenu.currentAddress, currentAddress);
    cy.typeInElement(selectors.textboxMenu.permanentAddress, permanentAddress);
  }
);

Cypress.Commands.add('submitTextBoxForm', () => {
  cy.clickElement(selectors.textboxMenu.submitBtn);
});

Cypress.Commands.add('assertTextBoxOutputContains', (text: string) => {
  cy.assertContainsText(selectors.textboxMenu.output, text);
});

export {};
