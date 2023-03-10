class HeaderNavComponent {
     get sideMenuBtn () {
          return $("//button[@class='js-navToggle']");
     };

     get cartTotal () {
          return $("#js-navbar-cart-button-item-total")
     }

   
     get siteLogo () {
          return $(".c-siteHeader__logoLink")
     }


     categoryNav (category) {
          return $("//a[@href='/t/kategorije/"+category+"']")
     }

     navLinks (linkText) {
          return $("//a[@href='/"+ linkText +"']");
     };

   

};

export default new HeaderNavComponent();