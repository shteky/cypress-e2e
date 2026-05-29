import './commands/actions';
import './commands/assertions';
import { bookStorePage } from '../pages/DemoQA/BookStorePage';

Cypress.Commands.add('bookStoreLogin', (username: string, password: string) => {
  bookStorePage.login(username, password);
});
