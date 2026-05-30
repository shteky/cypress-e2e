beforeEach(() => {
  cy.visitHomePage();
  cy.openBookStoreApp();
});

describe('Login / Logout functionality', () => {
  it('Login existing user', () => {
    cy.bookStoreLogin('test1', 'P@ssw0rd-1');
    cy.assertBookStoreLogoutVisible();
  });

  it('User logout', () => {
    cy.bookStoreLogin('test1', 'P@ssw0rd-1');
    cy.bookStoreLogout();
    cy.assertBookStoreLoginVisible();
  });

  it('if/else login', () => {
    cy.ensureBookStoreLoggedIn('test1', 'P@ssw0rd-1');
  });
});
