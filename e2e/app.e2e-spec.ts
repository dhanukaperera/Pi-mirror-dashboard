import { Angular2ElectronBoilerplatePage } from './app.po';

describe('angular2-electron-boilerplate App', function() {
  let page: Angular2ElectronBoilerplatePage;

  beforeEach(() => {
    page = new Angular2ElectronBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
