class Registration1stComp {

    get emailInput () {
        return $("#spree_user_email")
    }

    get termsCheckbox () {
        return $("#terms + label")
    }

    get registerButton () {
        return $("#register-button")
    }

    get backButton () {
        return $(".e-btn__text a[href='/login']")
    } 

    get errorMsg() {
        return $("//span[@class='e-alert__content']")
    }


}

export default new Registration1stComp();