const selectors = {
  loginBtn: '#login',
  logoutBtn: '#submit',
  newUserBtn: '#newUser',
  header: '.main-header',
  login: {
    tab: '.show li:nth-of-type(1)',
    username: '#userName',
    password: '#password',
  },
  store: {
    tab: '.show li',
    searchBox: '#searchBox',
    searchBtn: '.input-group-append',
    listing: 'table tbody',
    bookTitle: '.action-buttons > .mr-2',
  },
};

Cypress.Commands.add('bookStoreLogin', (username: string, password: string) => {
  cy.clickElement(selectors.loginBtn);
  cy.typeInElement(selectors.login.username, username);
  cy.typeInElement(selectors.login.password, password);
  cy.clickElement(selectors.loginBtn);
});

Cypress.Commands.add('openBookStore', () => {
  cy.contains('button', 'Go To Book Store').click();
  cy.get(selectors.store.searchBox).should('be.visible');
  cy.get(selectors.store.listing).should('be.visible');
});

Cypress.Commands.add('bookStoreLogout', () => {
  cy.clickElement(selectors.logoutBtn);
});

Cypress.Commands.add('assertBookStoreLogoutVisible', () => {
  cy.assertElementVisible(selectors.logoutBtn);
});

Cypress.Commands.add('assertBookStoreLoginVisible', () => {
  cy.assertElementVisible(selectors.loginBtn);
});

Cypress.Commands.add('assertBookStoreListingVisible', () => {
  cy.assertElementVisible(selectors.store.listing);
});

Cypress.Commands.add('assertBookListingCount', (count: number) => {
  cy.get(selectors.store.listing).children().should('have.length', count);
});

Cypress.Commands.add('searchBookInStore', (title: string) => {
  cy.typeInElement(selectors.store.searchBox, title);
  cy.assertElementText(selectors.store.bookTitle, title);
  cy.clearElement(selectors.store.searchBox);
});

Cypress.Commands.add('ensureBookStoreLoggedIn', (username: string, password: string) => {
  cy.get('.col-md-6').then(($body) => {
    if ($body.find(selectors.loginBtn).length > 0) {
      cy.bookStoreLogout();
    } else {
      cy.assertElementDoesNotExist(selectors.logoutBtn);
      cy.bookStoreLogin(username, password);
    }
  });
});

export {};
