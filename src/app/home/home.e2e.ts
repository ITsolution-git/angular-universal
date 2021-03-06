import { protractor, browser, element, by } from 'protractor';
export const homePage = {
  load() {
    return browser.get('/#/');
  },
  mainImage() {
    return element(by.id('main-image')).getWebElement();
  },
  mainImageHeight() {
    return this.mainImage().getCssValue('height');
  },
  mainImageMaxHeight() {
    return this.mainImage().getCssValue('max-height');
  },



  setFullWidthScreen() {
    return browser.manage().window().setSize(1080, 1920);
  },
  setMobileScreen() {
    return browser.manage().window().setSize(320, 480);
  }
};

describe('*** HomePage ***', () => {
  afterEach(() => {
    // verifyNoBrowserErrors();
  });
  describe('When in full-width mode', () => {
    beforeAll(() => {
      homePage.load();
      homePage.setFullWidthScreen();
    });
    describe('Main Image', () => {
      it('should have the big height', () => {
        expect(homePage.mainImageHeight()).toBe('650px');
        //expect(homePage.mainImageMinHeight()).toBe('650px');
      });
    });
  });

  describe('When in Mobile mode', () => {
    beforeAll(() => {
      homePage.load();
      homePage.setMobileScreen();
    });
    describe('Main Image', () => {
      it('should have the small height', () => {
        expect(homePage.mainImageHeight()).toBe('500px');
        //expect(homePage.mainImageMinHeight()).toBe('500px');
      });
    });
  });
});
