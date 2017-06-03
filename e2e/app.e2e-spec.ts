import { GithubSearchPage } from './app.po';

describe('github-search App', () => {
  let page: GithubSearchPage;

  beforeEach(() => {
    page = new GithubSearchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
