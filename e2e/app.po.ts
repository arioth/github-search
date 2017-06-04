import { browser, by, element } from 'protractor';

export class GithubSearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getInputText() {
    return element(by.css('app-root input'));
  }

  getSubmitButton() {
    return element(by.css('app-root button[type=submit]'));
  }

  getUserTitle() {
    return element(by.css('app-root .user > h3')).getText();
  }

  getUserImage() {
    return element(by.css('app-root .user > img')).getAttribute('src');
  }
}
