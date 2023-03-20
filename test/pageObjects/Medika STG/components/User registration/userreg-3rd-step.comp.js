class Registration3rdComp {

    get user_DoB () {
        return $('.e-formField__datepicker.form-control.input.js-datepicker')
    }

    get user_Gender () {
        return $('.e-formField__optionsInline')
    }

    get submitInfo_btn () {
        return $('.js-form__submit')
    }

    get skip_btn () {
        return $('a[href="/users/skip_info_update"]')
    }




}

export default new Registration3rdComp();