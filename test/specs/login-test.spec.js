import HomePage from "../pageObjects/home.page";
import LoginPage from "../pageObjects/login.page";
import UserAccountPage from "../pageObjects/user-account.page";



describe('User login (email) and logout)', () => {

    it('Unsuccessful attempt - missing or wrong credentials', async () => {
    
        //Navigate to login page
        await HomePage.open();
        await HomePage.navigateToLogin();

        //Attempt to log in without credentials

        await LoginPage.loginComponent.credentialsInput("email").setValue("");
        await LoginPage.loginComponent.credentialsInput("password").setValue("");
        await expect(LoginPage.loginComponent.submitBtn).toBeDisabled();

        //Attempt to login with wrong email format

        await LoginPage.loginComponent.credentialsInput("email").setValue("rctestmail@gmailcom");
        await LoginPage.loginComponent.credentialsInput("password").setValue("password123");
        await LoginPage.loginComponent.rememberMeCb.click();
        await LoginPage.loginComponent.errorMsg.waitForDisplayed();
        await expect(LoginPage.loginComponent.errorMsg).toHaveText("Email adresa nije validna")
        
        //Attempt to login with invalid password

        await LoginPage.loginComponent.credentialsInput("email").setValue("renata.colak+wdio@ingemark.com");
        await LoginPage.loginComponent.credentialsInput("password").setValue("password123");
        await LoginPage.loginComponent.rememberMeCb.click();
        await expect(LoginPage.loginComponent.submitBtn).toBeEnabled();
        await LoginPage.loginComponent.submitBtn.click();
        await LoginPage.loginComponent.errorMsg.waitForDisplayed();
        await expect(LoginPage.loginComponent.errorMsg).toHaveText("Neispravni podaci za prijavu!")
        
    });

    it('Successful login and logout', async () => {
        //data

        const validEmail = ["renata.colak+wdio@ingemark.com", "renata.colak+wdio1@ingemark.com"]
        const validPass = ["aloalo123", "aloalo124"];

        await LoginPage.open();

        //Enter valid credentials and log in
        await LoginPage.loginUser(validEmail[0], validPass[0]);

        //Confirm user is logged in
        await HomePage.navigateToProfile();
        await expect(UserAccountPage.UsrProfileComponent.loginEmail).toHaveValue(validEmail[0]);

        //Log out user and confirm user is logged out
        await UserAccountPage.logoutUser();
        //Log in different user, confirm different user is logged in
        await HomePage.navigateToLogin();
        await LoginPage.loginUser(validEmail[1], validPass[1]);
        await HomePage.navigateToProfile();
        await expect(UserAccountPage.UsrProfileComponent.loginEmail).toHaveValue(validEmail[1]);

    });

});