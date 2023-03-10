class LocationModalComponent {

    get locationModalDisplay() {
        return $("//div[@data-controller='order-location-modal']");
    }

    get inputAddress() {
        return $("#autoComplete");
    }

    get addrSuggest() {
        return $("#autoComplete_list_2  > li");
    }

    get addrSelect() {
        return $("//div[@class='e-radio__item js-pristineParent']/label");
    }

    get continueAddrBtn() {
        return $("//button/span[text()='Nastavi kupovati']");
    }
    
}

export default new LocationModalComponent();
