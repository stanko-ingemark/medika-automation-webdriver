import { default as checkoutConfirmationComp, default as CheckoutConfirmationComp } from "./Medika STG/components/checkout-confirmation.comp";

class OrderConfirmationPage {
    get ConfirmationComponent() {
        return CheckoutConfirmationComp
    } 

    async finalAddress () {
    return checkoutConfirmationComp.address_FirstLast.getText() + " " + checkoutConfirmationComp.address_StreetNum.getText() + " " + checkoutConfirmationComp.address_ZipCity.getText();
    }

}

export default new OrderConfirmationPage();