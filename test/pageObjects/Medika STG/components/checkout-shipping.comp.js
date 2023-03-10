class Checkout_ShippingComp {


    get deliveryOption() {

        return $("[for='delivery']")
    }

    get storePUOption() {

        return $("[for='store']")
    }

    get chosenShipping() {

        return $("#js-address-missing-data-delivery")
    }


    get inputFirstName() {

        return $("#order_ship_address_attributes_firstname")
    }
    
    get inputLastName() {

        return $("#order_ship_address_attributes_lastname")
    }

    get inputPhoneNum() {

        return $("#order_ship_address_attributes_phone")

    }

    get inputEmail() {

        return $("#order_email")

    }

    get inputAddress() {

        return $("#order_ship_address_attributes_address1")
        
    }

    get inputHouseNum() {

        return $("#order_ship_address_attributes_address2")
        
    }

    get inputCity() {

        return $("#order_ship_address_attributes_city")
        
    }

    get inputPostNum() {

        return $("#order_ship_address_attributes_zipcode")

    }

    get inputComment() {

        return $("#order_special_instructions")

    }

}

export default new Checkout_ShippingComp();