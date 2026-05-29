export class ElementsPage {
  readonly selectors = {
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
    webTablesMenu: {},
  };

  openTextBox(): void {
    cy.visit(`${Cypress.env('demoQA')}text-box`);
    cy.get(this.selectors.textboxMenu.name).should('be.visible');
  }
}

export const elementsPage = new ElementsPage();
