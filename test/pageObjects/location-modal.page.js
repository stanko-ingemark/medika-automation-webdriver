import LocationModalComponent from "./Medika STG/components/location-modal.comp";

class LocationModal {
    get locModalComp() {
        return LocationModalComponent;
        }

    async new_inputAddress(addr) {
        await LocationModalComponent.inputAddress.setValue(addr);
        await LocationModalComponent.addrSuggest.click();
        await LocationModalComponent.addrSelect.waitForDisplayed();
        await LocationModalComponent.addrSelect.click();
        await LocationModalComponent.continueAddrBtn.waitForEnabled();
        await LocationModalComponent.continueAddrBtn.click();

    }
}

export default new LocationModal();