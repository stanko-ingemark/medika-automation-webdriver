import HomePage from "../pageObjects/home.page";
import NotificationComponent from "../pageObjects/Medika STG/components/notification.comp";
import ProductGridComponent from "../pageObjects/Medika STG/components/product-grid.comp";
import LocationModal from "./location-modal.page";

class CategoryPage  {

    get productGrid() {
        return ProductGridComponent
    }

    async addItemstoCart(item1, item2, item3) {
        //items and prices array
        const chosenItems = [];
        const itemPrices = [];
        const itemsCart =  await HomePage.headerNavComp.cartTotal.getText();
        let itemsNum_inCart = parseInt(itemsCart)

        //Add chosen items to cart
        const productTitles = await ProductGridComponent.products_HeaderTitle;
        for (const header of productTitles) {
            const productTitle = await header.getText();
            if (productTitle.toLowerCase() == item1.toLowerCase() ||
                productTitle.toLowerCase() == item2.toLowerCase()||
                productTitle.toLowerCase() == item3.toLowerCase()) 
            {   
                chosenItems.push(productTitle);
                const attr = await header.getAttribute("href");
                const itemID = attr.split("products/").pop(); 
                const addToCart = await $("//a[@href='/products/" + itemID + "'][@data-currency='EUR']/../../following-sibling::div/button")
                await addToCart.click();
        
                //if no products in cart - check if modal is triggered and add pharmacy address
                if (itemsNum_inCart == 0) {
                    await LocationModal.locModalComp.locationModalDisplay.waitForDisplayed();
                    await LocationModal.new_inputAddress("Haram");
                    await expect (LocationModal.locModalComp.locationModalDisplay).not.toBeDisplayed();
            }
        
                //Validate product added to cart (notification, minicart updated)
                await NotificationComponent.popupNotif.waitForDisplayed();
                await expect(NotificationComponent.popupNotif).toHaveText("Proizvod je uspješno dodan u košaricu.");
                itemsNum_inCart += 1;
                await expect (HomePage.headerNavComp.cartTotal).toHaveText(itemsNum_inCart.toString())
        
                //save price of each item
                itemPrices.push(await $("//a[@href='/products/" + itemID + "'][@data-currency='EUR']/../following-sibling::div/span[@class='now']").getText())
            }

        }
        
        //format saved prices
        const formattedItemPrices = [];
        itemPrices.forEach((price) => {
            formattedItemPrices.push(price.replace(",",".").replace(" €", ""));
        }); 
        
        //calculate items total
        let itemsTotal = 0.0;
        formattedItemPrices.forEach(price => itemsTotal += parseFloat(price));
        itemsTotal = itemsTotal.toFixed(2)

        return {
            itemsSum:itemsTotal,
            itemTitles:chosenItems
        };
    }

}

export default new CategoryPage();