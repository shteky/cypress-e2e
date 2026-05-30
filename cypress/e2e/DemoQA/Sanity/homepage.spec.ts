beforeEach(() => {
  cy.visitHomePage();
});

describe('DemoQA - Elements', () => {
  it('DemoQA - Elements page', () => {
    cy.assertHomepageCategoryCards();
    cy.assertHomepageCategoryLabels();
  });
});
