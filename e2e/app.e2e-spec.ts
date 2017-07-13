import { TechClubPage } from './app.po';

describe('tech-club App', () => {
  let page: TechClubPage;

  beforeEach(() => {
    page = new TechClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
