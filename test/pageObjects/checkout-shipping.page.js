import CheckoutShippingComp from "./Medika STG/components/checkout-shipping.comp";
import OrderSidebarComp from "./Medika STG/components/order-sidebar.comp";

class CheckoutShipping {

    get orderSidebar () {
        return OrderSidebarComp;
    }

    get shippingInput () {
        return CheckoutShippingComp;
    }

    async inputShippingAddress() {
        await CheckoutShippingComp.inputFirstName.setValue("Rtest"+Math.floor(Math.random() * 100)+"");
        await CheckoutShippingComp.inputLastName.setValue("Wdio");
        await CheckoutShippingComp.inputPhoneNum.setValue("091"+Math.floor(Math.random() * 1000000)+"");
        await CheckoutShippingComp.inputEmail.setValue("rctestmail93+"+Math.floor(Math.random() * 100)+"@gmail.com");
        await CheckoutShippingComp.inputAddress.setValue("Autotest ulica");
        await CheckoutShippingComp.inputHouseNum.setValue(Math.floor(Math.random() * 100) * 10);
        await CheckoutShippingComp.inputCity.setValue("Zagreb");
        await CheckoutShippingComp.inputPostNum.setValue(10000);
        await CheckoutShippingComp.inputComment.setValue("checkout test");
    }

     async saveShippingAddress() {
        let fname = await CheckoutShippingComp.inputFirstName.getValue();
        let lname = await CheckoutShippingComp.inputLastName.getValue();
        let phoneNum = await CheckoutShippingComp.inputPhoneNum.getValue();
        let email = await CheckoutShippingComp.inputEmail.getValue();
        let address = await CheckoutShippingComp.inputAddress.getValue();
        let houseNum = await CheckoutShippingComp.inputHouseNum.getValue();
        let city = await CheckoutShippingComp.inputCity.getValue();
        let postNum = await CheckoutShippingComp.inputPostNum.getValue();

        let savedAddress =  {
            firstName: fname,
            lastName: lname,
            phoneNum: phoneNum,
            email: email,
            address: address, 
            houseNum: houseNum, 
            city: city,
            postNum: postNum
        }
        
        return `${savedAddress.firstName} ${savedAddress.lastName} ${savedAddress.address} ${savedAddress.houseNum} ${savedAddress.postNum} ${savedAddress.city}`

    }

    async calculateTotal() {

        let unformattedPrices = [];
        let formattedPrices = []

        const subTotal = await OrderSidebarComp.subTotal.getText();
        const delivery = await OrderSidebarComp.deliverySummary.getText();

        unformattedPrices.push(subTotal, delivery);

        unformattedPrices.forEach((price) => {
            formattedPrices.push(price.replace(",",".").replace("€", ""));
        })

        let expectedTotal = 0.0;

        formattedPrices.forEach(price => expectedTotal += parseFloat(price));
        expectedTotal = expectedTotal.toFixed(2)
    
        return expectedTotal;

    }

    async formatTotal() {
        let utotalPrice = await OrderSidebarComp.orderTotal.getText()
        utotalPrice = utotalPrice.replace(",",".").replace(" €", "");
        let totalPrice = parseFloat(utotalPrice).toFixed(2)

        return totalPrice
    }

}

export default new CheckoutShipping();