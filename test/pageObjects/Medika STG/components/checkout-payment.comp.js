class CheckoutPaymentComp {
    get option_PaymentDelivery() {
        return $("[for='ondelivery']")
    }

    get text_OnDelivery() {
        return $("#js-ondelivery .fw-bold")
    }
}

export default new CheckoutPaymentComp();