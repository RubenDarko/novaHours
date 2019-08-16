import { element, by } from "protractor";

export class Jira {

    loginLink     = element(by.xpath("//a[contains(@href,'login')]"));
    usernameField = element(by.id("username"));
    passwordField = element(by.id("password"));
    submitButton  = element(by.id("login-submit"));
    searchField   = element(by.id("advanced-search"));

    public getDescriptionByTicket(ticket: String) {
        return element(by.xpath("//tr[@data-issuekey='" + ticket + "']/td[@class='description']"));
    }
}