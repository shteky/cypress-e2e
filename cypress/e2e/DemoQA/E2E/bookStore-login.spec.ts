import { homePage } from '../../../pages/DemoQA/HomePage';
import { bookStorePage } from '../../../pages/DemoQA/BookStorePage';

beforeEach(() => {
  homePage.visit();
  homePage.openBookStoreApp();
});

describe('Login / Logout functionality', () => {
  it('Login existing user', () => {
    cy.clickElement(bookStorePage.selectors.loginBtn);
    cy.typeInElement(bookStorePage.selectors.login.username, 'test1');
    cy.typeInElement(bookStorePage.selectors.login.password, 'P@ssw0rd-1');
    cy.clickElement(bookStorePage.selectors.loginBtn);

    cy.assertElementVisible(bookStorePage.selectors.logoutBtn);
  });

  it('User logout', () => {
    cy.bookStoreLogin('test1', 'P@ssw0rd-1');
    bookStorePage.logout();

    cy.assertElementVisible(bookStorePage.selectors.loginBtn);
  });

  it('if/else login', () => {
    cy.get('.col-md-6').then(($body) => {
      if ($body.find(bookStorePage.selectors.loginBtn).length > 0) {
        bookStorePage.logout();
      } else {
        cy.assertElementDoesNotExist(bookStorePage.selectors.logoutBtn);
        cy.bookStoreLogin('test1', 'P@ssw0rd-1');
      }
    });
  });
});
