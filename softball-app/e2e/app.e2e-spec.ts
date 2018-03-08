import { AppPage } from './app.po';

describe('softball-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Player Name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Player Name');
  });
});
