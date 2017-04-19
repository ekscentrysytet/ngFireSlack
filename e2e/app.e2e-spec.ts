import { NgFireSlackPage } from './app.po';

describe('ng-fire-slack App', () => {
  let page: NgFireSlackPage;

  beforeEach(() => {
    page = new NgFireSlackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
