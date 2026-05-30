beforeEach(() => {
  cy.visitHomePage();
  cy.openBookStoreApp();
  cy.bookStoreLogin('test1', 'P@ssw0rd-1');
  cy.openBookStore();
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
    cy.assertBookStoreListingVisible();
    cy.assertBookListingCount(8);
  });

  it('Search for book', () => {
    context('', () => {
      for (let index = 0; index < books.length; index++) {
        cy.searchBookInStore(books[index]);
      }
    });
  });

  it('cross-origin', () => {
    cy.visit('https://filiphric.com');
    cy.visit('https://docs.cypress.io');
  });
});
