import HomePage from "../pageObjects/home.page";
import CategoryPage from "../pageObjects/category-page";
import CartPage from "../pageObjects/cart.page";

describe('add products to cart and validate total as guest user', () => {

    it('Add products to cart', async () => {

        //Navigate to category page
        await HomePage.open();
        await HomePage.navigateToCategory("kozmetika");

        //Add three items to cart, save total price and titles of added items
        let articles = await CategoryPage.addItemstoCart("Antiperspirant Roll-On","L`ERBOLARIO SUN SVJETLUCAJUĆA KREMA","L`ERBOLARIO SUN MAST SUPER BRZO TAMNJENJE")
   
        //navigate to cart
        await HomePage.navigateToCart();

        //validate items

        await CartPage.checkItems(articles.itemTitles);

        //validate total

        await CartPage.checkTotal(articles.itemsSum)

        
    });
});