class Reg_CheckEmailComp {

    get checkEmail_heading () {
        return $('.t-center .mt-s .t-h1')
    }

    get resendEmail_btn () {
        return $('a[href="/users/resend_confirmation"]')
    }

    get backHomepage_btn () {
        return $('.mt-s a[href="/"]')
    }

}

export default new Reg_CheckEmailComp();