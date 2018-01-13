import { Be4youPage } from './app.po';

describe('be4you App', function() {
  let page: Be4youPage;

  beforeEach(() => {
    page = new Be4youPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
