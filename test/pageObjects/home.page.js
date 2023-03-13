import BasePage from "./base.page";
import headerNavComp from "./Medika STG/components/header-nav.comp";

class HomePage extends BasePage {
    open() {
        return super.open("");
    }

    get headerNavComp() {
        return headerNavComp;
    }

    async navigateToLogin() {
        await headerNavComp.sideMenuBtn.waitForDisplayed();
        await headerNavComp.sideMenuBtn.click();
        await headerNavComp.navLinks("login").waitForDisplayed();
        await headerNavComp.navLinks("login").waitForClickable();
        await headerNavComp.navLinks("login").click();
        await expect(browser).toHaveUrl('https://dev.pharmeria.hr/login');
        await expect(browser).toHaveTitle('Login - Pharmeria.hr');

    }

    async navigateToProfile() {
        await headerNavComp.sideMenuBtn.waitForDisplayed();
        await headerNavComp.sideMenuBtn.click();
        await headerNavComp.navLinks("account").waitForDisplayed();
        await headerNavComp.navLinks("account").waitForClickable();
        await headerNavComp.navLinks("account").click();
        await expect(browser).toHaveUrl('https://dev.pharmeria.hr/account');
        await expect(browser).toHaveTitle('Moj račun - Pharmeria.hr');
    }

    async navigateToCategory(category) {
        await headerNavComp.sideMenuBtn.waitForDisplayed();
        await headerNavComp.sideMenuBtn.click();
        await headerNavComp.categoryNav(category.toLowerCase()).waitForDisplayed();
        await headerNavComp.categoryNav(category.toLowerCase()).waitForClickable();
        await headerNavComp.categoryNav(category.toLowerCase()).click();
        await expect(browser).toHaveUrl("https://dev.pharmeria.hr/t/kategorije/"+ category.toLowerCase() +"");

    }

    async navigateToCart() {
        await headerNavComp.navLinks("cart").click();
        await expect(browser).toHaveUrl("https://dev.pharmeria.hr/cart");
        await expect(browser).toHaveTitle("Košarica - Pharmeria.hr");
    }

}

export default new HomePage();
