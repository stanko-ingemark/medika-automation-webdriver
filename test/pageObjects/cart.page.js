import BasePage from "./base.page";
import CartComponents from "./Medika STG/components/cart.comp";

class CartPage extends BasePage {
    open() {
        return super.open("cart");
    };

    get CartComponent() {
        return CartComponents;
    }

    get CheckoutBtn() {
        return $("#navigationSubmitButton")
    }

    async checkItems(itemsAdded) {
        const cart_productNames = await CartComponents.cart_productNames;
        const itemsInCart = [];
        for (const item of cart_productNames) {
            const productTitle = await item.getText()
            itemsInCart.push(productTitle)      
            }        
        await expect(itemsAdded).toEqual(itemsInCart)

    }

    async checkTotal (addedTotal) {
        const cart_Total = await CartComponents.cart_Total;
        let totalPrice = await cart_Total.getText();
        totalPrice = totalPrice.replace(",",".").replace("€", "");
        await expect(addedTotal).toEqual(parseFloat(totalPrice).toFixed(2))
    }

}

export default new CartPage();