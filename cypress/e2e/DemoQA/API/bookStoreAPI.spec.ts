const username = `test${Date.now()}`;
const password = 'P@ssw0rd-1';

describe('Book store API requests', () => {
  it('POST - create user', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/User',
      body: {
        userName: username,
        password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('POST - authorize user', () => {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      body: {
        userName: 'test1',
        password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET - book lists', () => {
    cy.request('GET', 'https://demoqa.com/BookStore/v1/Books').then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });
});
