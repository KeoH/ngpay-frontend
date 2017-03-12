import { browser, element, by } from 'protractor';

export class NgPayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngpay-root h1')).getText();
  }
}
