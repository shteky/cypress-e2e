import { homePage } from '../../../pages/DemoQA/HomePage';
import { bookStorePage } from '../../../pages/DemoQA/BookStorePage';

beforeEach(() => {
  homePage.visit();
  homePage.openBookStoreApp();
  cy.bookStoreLogin('test1', 'P@ssw0rd-1');
  bookStorePage.openStore();
});

const books = [
  'Learning JavaScript Design Patterns',
  'Git Pocket Guide',
  'Speaking JavaScript',
  "You Don't Know JS",
  'Programming JavaScript Applications',
  'Understanding ECMAScript 6',
];

describe('Books listing page', () => {
  it('Books listings', () => {
    cy.assertElementVisible(bookStorePage.selectors.store.listing);
    cy.get(bookStorePage.selectors.store.listing).children().should('have.length', 8);
  });

  it('Search for book', () => {
    context('', () => {
      for (let index = 0; index < books.length; index++) {
        cy.typeInElement(bookStorePage.selectors.store.searchBox, books[index]);
        cy.assertElementText(bookStorePage.selectors.store.bookTitle, books[index]);
        cy.clearElement(bookStorePage.selectors.store.searchBox);
      }
    });
  });

  it('cross-origin', () => {
    cy.visit('https://filiphric.com');
    cy.visit('https://docs.cypress.io');
  });
});
