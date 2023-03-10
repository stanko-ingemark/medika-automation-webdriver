import BasePage from "./base.page";
import loginComponent from "./Medika STG/components/login.comp";
import NotificationComponent from "./Medika STG/components/notification.comp";


class LoginPage extends BasePage {
    open() {
        return super.open("login");
    };

    get loginComponent() {
        return loginComponent;
    }


    async loginUser(email,password) {
        await loginComponent.credentialsInput("email").setValue(email)
        await loginComponent.credentialsInput("password").setValue(password)
        await loginComponent.rememberMeCb.click();
        await expect(loginComponent.submitBtn).toBeEnabled();
        await loginComponent.submitBtn.click();
        await NotificationComponent.popupNotif.waitForDisplayed();
        await expect(NotificationComponent.popupNotif).toHaveText("Uspješno ste se prijavili");
    }

}


export default new LoginPage();