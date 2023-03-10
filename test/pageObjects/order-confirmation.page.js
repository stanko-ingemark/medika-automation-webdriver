import { default as checkoutConfirmationComp, default as CheckoutConfirmationComp } from "./Medika STG/components/checkout-confirmation.comp";

class OrderConfirmationPage {
    get ConfirmationComponent() {
        return CheckoutConfirmationComp
    } 

}

export default new OrderConfirmationPage();