beforeEach(() => {
  cy.visitHomePage();
});

describe('DemoQA - Elements', () => {
  it('DemoQA - Elements page', () => {
    cy.assertElementsCategoryCardVisible();
    cy.openElementsPage();
    cy.url().should('contain', 'elements');
    cy.assertElementsTextBoxMenuLabel();
    cy.openElementsSidebarMenus();
  });

  it('DemoQA - Text box output result', () => {
    cy.openElementsPage();
    cy.openTextBoxPage();
    cy.fillTextBoxForm(
      'John Doe',
      'john.Doe@test.net',
      'Bulgaria, Sofia city, Lyulin 10 district',
      'Bulgaria, Stara Zagora city, Zheleznik district'
    );
    cy.submitTextBoxForm();
    cy.assertTextBoxOutputContains('john.Doe@test.net');
  });
});
