class OrderConfirmationComp {
    get orderTotal () {
        return $("//p[text()='CIJENA NARUDŽBE']/following-sibling::p[1]")
    }

    get address_FirstLast () {
        return $('//p[text()="ADRESA DOSTAVE"]/following-sibling::div[1]')
    }

    get address_StreetNum () {
        return $('//p[text()="ADRESA DOSTAVE"]/following-sibling::div[2]')
    }

    get address_ZipCity () {
        return $('//p[text()="ADRESA DOSTAVE"]/following-sibling::div[3]')
    } 
    }

export default new OrderConfirmationComp;