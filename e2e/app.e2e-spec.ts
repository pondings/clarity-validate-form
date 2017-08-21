import { ValidationPage } from './app.po';

describe('validation App', () => {
  let page: ValidationPage;

  beforeEach(() => {
    page = new ValidationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
