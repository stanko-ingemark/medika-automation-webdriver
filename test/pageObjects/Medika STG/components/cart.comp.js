class CartComponents {
    get cart_productNames() {
         return $$('//h2[@class ="c-productCardInOrder__title"]/a'); 
        }

    get cart_Total()  { 
        return $('#summary-order-total-sidebar') 
    }

    get emptyCart() {
        return $(".c-emptyCart__content")
    }
}

export default new CartComponents();