Cypress.Commands.add('assertElementText', (selector: string, text: string) => {
  cy.get(selector).should('have.text', text);
});

Cypress.Commands.add('assertContainsText', (selector: string, text: string) => {
  cy.get(selector).should('contains.text', text);
});

Cypress.Commands.add('assertIncludesText', (selector: string, expectedText: string) => {
  cy.get(selector).then(($element) => {
    expect($element.text().includes(expectedText)).to.be.true;
  });
});

Cypress.Commands.add('assertNotIncludesText', (selector: string, text: string) => {
  cy.get(selector).should('not.include.text', text);
});

Cypress.Commands.add('assertElementValue', (selector: string, value: string) => {
  cy.get(selector).should('have.value', value);
});

Cypress.Commands.add('assertElementLength', (selector: string, length: number) => {
  cy.get(selector).should('have.length', length);
});

Cypress.Commands.add('assertElementVisible', (selector: string) => {
  cy.get(selector).should('be.visible');
});

Cypress.Commands.add('assertElementNotVisible', (selector: string) => {
  cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('assertElementDoesNotExist', (selector: string) => {
  cy.get(selector).should('not.exist');
});

Cypress.Commands.add('assertCheckboxChecked', (selector: string) => {
  cy.get(selector).should('be.checked');
});

Cypress.Commands.add('assertCheckboxNotChecked', (selector: string) => {
  cy.get(selector).should('not.be.checked');
});

Cypress.Commands.add('assertElementDisabled', (selector: string) => {
  cy.get(selector).should('be.disabled');
});

Cypress.Commands.add('assertElementHasIcon', (selector: string) => {
  cy.get(selector).find('img').should('have.attr', 'src');
});

Cypress.Commands.add(
  'assertCompareText',
  (selectorOne: string, selectorTwo: string, invokeOne: string, invokeTwo: string) => {
    let firstValue: string;

    cy.get(selectorOne)
      .invoke(invokeOne)
      .then((value) => {
        firstValue = value as string;
      });

    cy.get(selectorTwo)
      .invoke(invokeTwo)
      .then((value) => {
        expect(firstValue).to.eq(value);
      });
  }
);

Cypress.Commands.add('assertSearchResult', (rowNumber: number, column: number, text: string) => {
  const row = `.rt-tbody > div:nth-of-type(${rowNumber})`;
  cy.get(row).eq(column).contains(text).should('be.visible');
});

Cypress.Commands.add('assertPlaceholderText', (selector: string, text: string) => {
  cy.get(selector).invoke('attr', 'placeholder').should('eq', text);
});

Cypress.Commands.add(
  'assertElementDimensions',
  (selector: string, dimension: string, min: number, max: number) => {
    cy.get(selector).invoke(dimension).should('be.greaterThan', min).and('be.lessThan', max);
  }
);

Cypress.Commands.add('assertIfExists', (selector: string, callback: () => void) => {
  cy.get('body').then(($body) => {
    if ($body.find(selector).length) {
      callback();
    }
  });
});

Cypress.Commands.add('assertElementEmpty', (selector: string) => {
  cy.get(selector).should('be.empty');
});

Cypress.Commands.add('assertElementNotEmpty', (selector: string) => {
  cy.get(selector).should('not.be.empty');
});
