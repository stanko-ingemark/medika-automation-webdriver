import CheckoutPaymentComp from "./Medika STG/components/checkout-payment.comp";
import OrderSidebarComp from "./Medika STG/components/order-sidebar.comp";

class CheckoutPayment {

    get orderSidebar () {
        return OrderSidebarComp;
    }

    get paymentInput () {
        return CheckoutPaymentComp;
    }

}

export default new CheckoutPayment();