class AccSideMenuComponent {
    
    get logoutUser() {
        return $("//a[text()='Odjava']")
    }

}

export default new AccSideMenuComponent();