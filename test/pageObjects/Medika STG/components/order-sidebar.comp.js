class OrderSidebarComp {

    get subTotal () {
        return $('//span[text()="Iznos košarice"]/following-sibling::span')
    }

    get deliverySummary () {
        return $('//span[@data-checkout-target="shippingTotal"]')
    }

    get orderTotal () {
        return $('//span[@data-checkout-target="orderTotal"]')
    }

    get continueBtn () {
        return $("#navigationSubmitButton")

    }


}

export default new OrderSidebarComp();