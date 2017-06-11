import { Alunos2Page } from './app.po';

describe('alunos2 App', () => {
  let page: Alunos2Page;

  beforeEach(() => {
    page = new Alunos2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
