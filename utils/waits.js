class WaitUntil { 
  pageURLIncludes(expectedURL) {
      return browser.waitUntil(function() {
          return browser.getUrl().includes(expectedURL)
      }, 15000, `Waited 15 secs and page URL does not include ${expectedURL}`);
  };
  
  pageURLIsNoLonger(currentURL) {
      return browser.waitUntil(function() {
          return browser.getUrl() !== currentURL;
      }, 15000, 'Waited 15 secs and page URL has not changed.');
  };
  
  pageTitleExists() {
      return browser.waitUntil(function() {
          return browser.getTitle() !== "";
      }, 15000, 'Waited 15 secs and page title was empty.');
  };
  
  elementHasClass(element, expectedClass) {
      return browser.waitUntil(function() {
          return element.getAttribute('class').split(' ').includes(expectedClass);
      }, 1000, `Waited 10 seconds and ${element.selector} did not have the class: ${expectedClass}`);
  };
  
  elementHasAttributeValue(element, attribute, expectedValue) {
      return browser.waitUntil(function() {
          return element.getAttribute(attribute).split(' ').includes(expectedValue);
      }, 10000, `Waited 10 seconds and ${attribute} was not ${expectedValue} for element: ${element.selector}`);
  };

  elementHasCssProperty(element, cssProperty, expectedValue) {
      return browser.waitUntil(function() {
          return element.getCssProperty(cssProperty).value == expectedValue;
      }, 10000, `Waited 10 seconds and ${cssProperty} was not ${expectedValue} for element: ${element.selector}`);
  };
  
  elementIsVisible(element) {
      return browser.waitForVisible(element.selector);
  };
  
  elementIsNoLongerVisible(element) {
      return browser.waitForVisible(element.selector, null, true);
  };
  
  elementExists(element) {
      return browser.waitForExist(element.selector);
  };
  
  elementNoLongerExists(element) {
      return browser.waitForExist(element.selector, null, true);
  };
}

module.exports = new WaitUntil;