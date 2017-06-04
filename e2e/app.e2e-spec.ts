import { browser } from 'protractor';

import { GithubSearchPage } from './app.po';

describe('github-search App', () => {
  let page: GithubSearchPage;
  const username = 'arioth';

  beforeEach(() => {
    page = new GithubSearchPage();
  });

  describe('with user', () => {
    beforeEach(() => {
      page.navigateTo();
      const input = page.getInputText();
      const submitButton = page.getSubmitButton();

      input.sendKeys(username);
      submitButton.click();
      browser.sleep(2000);
    });

    it('displays username', done => {
      page.getUserTitle()
        .then(msg => expect(msg).toEqual(username))
        .then(done, done.fail);
    });
  });
});
