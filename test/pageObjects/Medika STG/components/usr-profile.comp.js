class UsrProfileComponent{
    get loginEmail() {
        return $("//input[@name='user[email]']")
    }

    get confirmEmail() {
        return $("//input[@name='user[email_confirmation]']")
    }

    get loginPassword() {
        return $("//input[@name='user[password]']")       
    }

    get confirmPassword() {
        return $("//input[@name='user[password_confirmation]']")       
    }

}

export default new UsrProfileComponent();