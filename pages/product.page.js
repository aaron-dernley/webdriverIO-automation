// page object file

class Product { 

  // define elements on the specific page here
  get addToBasketButtonTop() { return $( 'a.add-to-basket-button') }

  // write functions related to product page actions here
  addToBasket() {

    return this.addToBasketButtonTop.click();

  }
 }

 module.exports = new Product();