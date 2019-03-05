var productPage = require('../pages/product.page');
var waitUntil = require('../utils/waits');
var actions = require('../utils/actions');

describe("PDP add to bag functionality", function() {

  before(function() {
    // navigate straight to a product page
    browser.url("/Guitar-and-Bass/Epiphone-Les-Paul-SL-Heritage-Sunburst/1X07");
    // use a wait function until the add to basket button in visible (page loads)
    waitUntil.elementIsVisible(productPage.addToBasketButtonTop);
    // call the closeCookieBanner function
    actions.closeCookieBanner();
  });

  it('Add the item to the basket', function() {

    // call the addToBasket function which clicks the add to basket button
    productPage.addToBasket();

    // assign result of browser.getUrl() to the variable url to allow use in the expect assertion
    var url = browser.getUrl();

    // check to make sure the product is added to the basket successfully by checking URL
    expect(url).to.include('/basket/show', 'Url mismatch');

  });

});