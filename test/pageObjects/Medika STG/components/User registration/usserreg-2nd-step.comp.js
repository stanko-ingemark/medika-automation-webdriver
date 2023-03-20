class Registration2ndComp {

    get userName () {
        return $('#name')
    }

    get lastName () {
        return $('#surname')
    }

    get userPassword () {
        return $('#pass1')
    }

    get confirmPassword () {
        return $('#pass2')
    }

    get submit_Btn () {
        return $('button[name="button"][type = "submit"]')
    }

}

export default new Registration2ndComp();