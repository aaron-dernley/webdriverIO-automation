// utility functions for generic actions

class Actions { 

  closeCookieBanner() {

    return $('.g4m-btn-tertiary').click();

  }
 }

 module.exports = new Actions();