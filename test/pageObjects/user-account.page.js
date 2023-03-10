import BasePage from "./base.page";
import UsrProfileComponent from "./Medika STG/components/usr-profile.comp";
import AccSideMenuComponent from "./Medika STG/components/acc-sidemenu.comp";
import NotificationComponent from "./Medika STG/components/notification.comp";

class UserAccountPage extends BasePage {
    open() {
        return super.open("account");
    }

    get UsrProfileComponent() {
        return UsrProfileComponent;
    }

    get AccSideMenuComponent() {
        return AccSideMenuComponent;
    }

    async logoutUser() {
        await AccSideMenuComponent.logoutUser.click();
        await NotificationComponent.popupNotif.waitForDisplayed();
        await expect(NotificationComponent.popupNotif).toHaveText("Uspješno ste se odjavili");
        await expect(browser).toHaveUrl('https://dev.pharmeria.hr/login');
        await expect(browser).toHaveTitle('Login - Pharmeria.hr');
    }


}

export default new UserAccountPage();