import { RotasGuardsSample2Page } from './app.po';

describe('rotas-guards-sample2 App', () => {
  let page: RotasGuardsSample2Page;

  beforeEach(() => {
    page = new RotasGuardsSample2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
