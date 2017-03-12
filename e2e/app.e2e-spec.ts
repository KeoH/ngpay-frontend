import { NgPayPage } from './app.po';

describe('ng-pay App', function() {
  let page: NgPayPage;

  beforeEach(() => {
    page = new NgPayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngpay works!');
  });
});
