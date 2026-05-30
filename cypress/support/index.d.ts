/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    clickElement(selector: string): Chainable<JQuery<HTMLElement>>;
    clickFirstElement(selector: string): Chainable<JQuery<HTMLElement>>;
    clickLastElement(selector: string): Chainable<JQuery<HTMLElement>>;
    doubleClickElement(selector: string): Chainable<JQuery<HTMLElement>>;
    rightClickElement(selector: string): Chainable<JQuery<HTMLElement>>;
    clickElementContaining(selector: string, value: string): Chainable<JQuery<HTMLElement>>;
    typeInElement(selector: string, text: string): Chainable<JQuery<HTMLElement>>;
    clearElement(selector: string): Chainable<JQuery<HTMLElement>>;
    checkElement(selector: string): Chainable<JQuery<HTMLElement>>;
    uncheckElement(selector: string): Chainable<JQuery<HTMLElement>>;
    selectElementValue(selector: string, option: string): Chainable<JQuery<HTMLElement>>;
    scrollToElement(selector: string): Chainable<JQuery<HTMLElement>>;
    assertWindowAlert(expectedText: string): Chainable<void>;
    assertConfirmAlert(expectedText: string): Chainable<void>;
    openInNewTab(selector: string, removeAttribute: string): Chainable<JQuery<HTMLElement>>;
    visitAndVerifyPage(page: string, checkingElement: string): Chainable<void>;

    assertElementText(selector: string, text: string): Chainable<JQuery<HTMLElement>>;
    assertContainsText(selector: string, text: string): Chainable<JQuery<HTMLElement>>;
    assertIncludesText(selector: string, expectedText: string): Chainable<JQuery<HTMLElement>>;
    assertNotIncludesText(selector: string, text: string): Chainable<JQuery<HTMLElement>>;
    assertElementValue(selector: string, value: string): Chainable<JQuery<HTMLElement>>;
    assertElementLength(selector: string, length: number): Chainable<JQuery<HTMLElement>>;
    assertElementVisible(selector: string): Chainable<JQuery<HTMLElement>>;
    assertElementNotVisible(selector: string): Chainable<JQuery<HTMLElement>>;
    assertElementDoesNotExist(selector: string): Chainable<JQuery<HTMLElement>>;
    assertCheckboxChecked(selector: string): Chainable<JQuery<HTMLElement>>;
    assertCheckboxNotChecked(selector: string): Chainable<JQuery<HTMLElement>>;
    assertElementDisabled(selector: string): Chainable<JQuery<HTMLElement>>;
    assertElementHasIcon(selector: string): Chainable<JQuery<HTMLElement>>;
    assertCompareText(
      selectorOne: string,
      selectorTwo: string,
      invokeOne: string,
      invokeTwo: string
    ): Chainable<void>;
    assertSearchResult(rowNumber: number, column: number, text: string): Chainable<JQuery<HTMLElement>>;
    assertPlaceholderText(selector: string, text: string): Chainable<JQuery<HTMLElement>>;
    assertElementDimensions(
      selector: string,
      dimension: string,
      min: number,
      max: number
    ): Chainable<JQuery<HTMLElement>>;
    assertIfExists(selector: string, callback: () => void): Chainable<JQuery<HTMLBodyElement>>;
    assertElementEmpty(selector: string): Chainable<JQuery<HTMLElement>>;
    assertElementNotEmpty(selector: string): Chainable<JQuery<HTMLElement>>;

    visitHomePage(): Chainable<void>;
    openElementsPage(): Chainable<JQuery<HTMLElement>>;
    openBookStoreApp(): Chainable<JQuery<HTMLElement>>;
    assertHomepageCategoryCards(): Chainable<void>;
    assertHomepageCategoryLabels(): Chainable<void>;
    assertElementsCategoryCardVisible(): Chainable<JQuery<HTMLElement>>;

    bookStoreLogin(username: string, password: string): Chainable<void>;
    openBookStore(): Chainable<JQuery<HTMLElement>>;
    bookStoreLogout(): Chainable<JQuery<HTMLElement>>;
    assertBookStoreLogoutVisible(): Chainable<JQuery<HTMLElement>>;
    assertBookStoreLoginVisible(): Chainable<JQuery<HTMLElement>>;
    assertBookStoreListingVisible(): Chainable<JQuery<HTMLElement>>;
    assertBookListingCount(count: number): Chainable<JQuery<HTMLElement>>;
    searchBookInStore(title: string): Chainable<void>;
    ensureBookStoreLoggedIn(username: string, password: string): Chainable<void>;

    openTextBoxPage(): Chainable<JQuery<HTMLElement>>;
    assertElementsTextBoxMenuLabel(): Chainable<JQuery<HTMLElement>>;
    openElementsSidebarMenus(): Chainable<void>;
    fillTextBoxForm(
      name: string,
      email: string,
      currentAddress: string,
      permanentAddress: string
    ): Chainable<void>;
    submitTextBoxForm(): Chainable<JQuery<HTMLElement>>;
    assertTextBoxOutputContains(text: string): Chainable<JQuery<HTMLElement>>;
  }
}
