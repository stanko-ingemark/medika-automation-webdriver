import HomePage from "../pageObjects/home.page";
import CategoryPage from "../pageObjects/category-page";
import CartPage from "../pageObjects/cart.page";
import CheckoutShippingPage from "../pageObjects/checkout-shipping.page";
import CheckoutPaymentPage from "../pageObjects/checkout-payment.page";
import OrderConfirmationPage from "../pageObjects/order-confirmation.page";

describe('Guest checkout - NON OTC and cash on delivery only', () => {
    it('Guest checkout - pickup', async () => {
        
        //add items, navigate to cart and start checkout
        await HomePage.open();
        await HomePage.navigateToCategory("lifestyle");
        await CategoryPage.addItemstoCart("Iberogast oralne kapi, tekućina", "Eucerin Sensitive Protect krema za zaštitu kože lica od sunca SPF 50+", "KADULJA ČAJ");
        await HomePage.navigateToCart();
        await CartPage.CheckoutBtn.click();

        //choose pickup method, add shipping info and proceed
        await expect(browser).toHaveUrl("https://dev.pharmeria.hr/checkout/delivery")
        await CheckoutShippingPage.shippingInput.storePUOption.click();
        await expect (CheckoutShippingPage.shippingInput.chosenShipping).toHaveText("Vaši podaci")
        await CheckoutShippingPage.inputShippingAddress();
        await CheckoutShippingPage.orderSidebar.continueBtn.click();

        //choose cash on delivery
        await expect (browser).toHaveUrlContaining("checkout/payment")
        await CheckoutPaymentPage.paymentInput.option_PaymentDelivery.click();
        await expect (CheckoutPaymentPage.paymentInput.text_OnDelivery).toHaveText("Odabrano je plaćanje prilikom preuzimanja.")
        //save order total and finish order
        const orderTotal = await CheckoutShippingPage.orderSidebar.orderTotal.getText();
        await CheckoutShippingPage.orderSidebar.continueBtn.click();

        //check order confirmation page
        await expect (browser).toHaveUrlContaining("https://dev.pharmeria.hr/orders/")
        const confirmTotal = await OrderConfirmationPage.ConfirmationComponent.orderTotal.getText();
        //check if order total in order summary is correct
        await expect(orderTotal).toEqual(confirmTotal);

        //go back to homepage, check if minicart shows 0 items
        await HomePage.headerNavComp.siteLogo.click();
        const miniCartAmount = await HomePage.headerNavComp.cartTotal.getText();
        await expect(miniCartAmount).toEqual("0");
        //enter cart, check if is empty
        await CartPage.open();
        await expect(CartPage.CartComponent.emptyCart).toBeDisplayed();

    })

    it('Guest checkout - delivery', async() => {

        await HomePage.open();

        //add items, navigate to cart and start checkout
        await HomePage.navigateToCategory("moje-zdravlje");
        await CategoryPage.addItemstoCart("BELMIRAN DAN film tbl a20", "Antiperspirant Roll-On", "Iberogast oralne kapi, tekućina");
        await HomePage.navigateToCart();
        await CartPage.CheckoutBtn.click();

        //choose delivery method, add shipping info 
        await expect(browser).toHaveUrl("https://dev.pharmeria.hr/checkout/delivery")
        await CheckoutShippingPage.shippingInput.deliveryOption.click();
        await expect (CheckoutShippingPage.shippingInput.chosenShipping).toHaveText("Podaci za dostavu")
        await CheckoutShippingPage.inputShippingAddress();

        //check if delivery price is present
        await expect(CheckoutShippingPage.orderSidebar.deliverySummary).toBeDisplayed();

        //check if subtotal and delivery equal total
        let expectedTotal = await CheckoutShippingPage.calculateTotal();
        let totalPrice = await CheckoutShippingPage.formatTotal();
        
        await expect (totalPrice).toEqual(expectedTotal)


        //save address and proceed
        let customerInfo = await CheckoutShippingPage.saveShippingAddress();

        //save address function
        await CheckoutShippingPage.orderSidebar.continueBtn.click();

        //choose cash on delivery
        await expect (browser).toHaveUrlContaining("checkout/payment")
        await CheckoutPaymentPage.paymentInput.option_PaymentDelivery.click();
        await expect (CheckoutPaymentPage.paymentInput.text_OnDelivery).toHaveText("Odabrano je plaćanje prilikom preuzimanja.")
        //save order total and finish order
        const orderTotal = await CheckoutShippingPage.orderSidebar.orderTotal.getText();
        await CheckoutShippingPage.orderSidebar.continueBtn.click();

        //check order confirmation page
        await expect (browser).toHaveUrlContaining("https://dev.pharmeria.hr/orders/")
        const confirmTotal = await OrderConfirmationPage.ConfirmationComponent.orderTotal.getText();
        
        //check if shipping address is correct
        let finalAddress = await OrderConfirmationPage.ConfirmationComponent.address_FirstLast.getText() + " " + await OrderConfirmationPage.ConfirmationComponent.address_StreetNum.getText() + " " + await OrderConfirmationPage.ConfirmationComponent.address_ZipCity.getText();
        await expect (customerInfo).toEqual(finalAddress);
    

        //check if order total in order summary is correct
        await expect(orderTotal).toEqual(confirmTotal);

        //go back to homepage, check if minicart shows 0 items
        await HomePage.headerNavComp.siteLogo.click();
        const miniCartAmount = await HomePage.headerNavComp.cartTotal.getText();
        await expect(miniCartAmount).toEqual("0");
        //enter cart, check if is empty
        await CartPage.open();
        await expect(CartPage.CartComponent.emptyCart).toBeDisplayed();


        
    });
});


