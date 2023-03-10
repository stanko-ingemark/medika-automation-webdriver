class LoginComponent {

    get rememberMeCb () {
        return $("//label[text()='Zapamti me']");
    };

    get submitBtn () {
        return $("//div[@class='col w-1/2']/button[@type='submit']");
    };

    get errorMsg () {
        return $("//div[@class='js-error-messages']//div[@class='js-error-messages__output']|//span[@class='e-alert__content']")
    }


    credentialsInput (field) {
        return $("#"+ field + "");
    };



}

export default new LoginComponent();