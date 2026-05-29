export class BookStorePage {
  readonly selectors = {
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
    profile: {},
  };

  login(username: string, password: string): void {
    cy.clickElement(this.selectors.loginBtn);
    cy.typeInElement(this.selectors.login.username, username);
    cy.typeInElement(this.selectors.login.password, password);
    cy.clickElement(this.selectors.loginBtn);
  }

  openStore(): void {
    cy.contains('button', 'Go To Book Store').click();
    cy.get(this.selectors.store.searchBox).should('be.visible');
    cy.get(this.selectors.store.listing).should('be.visible');
  }

  logout(): void {
    cy.clickElement(this.selectors.logoutBtn);
  }
}

export const bookStorePage = new BookStorePage();
