export default class BasePage {
    open (path) {
        return browser.url(`https://dev.pharmeria.hr/${path}`)
    }

}