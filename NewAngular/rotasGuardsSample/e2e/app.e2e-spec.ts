import { RotasGuardsSamplePage } from './app.po';

describe('rotas-guards-sample App', () => {
  let page: RotasGuardsSamplePage;

  beforeEach(() => {
    page = new RotasGuardsSamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
