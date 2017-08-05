import { ProjectAlphaPage } from './app.po';

describe('project-alpha App', () => {
  let page: ProjectAlphaPage;

  beforeEach(() => {
    page = new ProjectAlphaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
