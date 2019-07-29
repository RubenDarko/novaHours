import { element, by } from "protractor";

export class Nova {

    singInLogo   = element(by.xpath("//img[@alt='Microsoft Logo']"));
    userField    = element(by.name("loginfmt"));
    passField    = element(by.name("passwd"));
    weekView     = element(by.xpath("//button[text()='week']"));
    staySigned   = element(by.xpath("//div[@class='row text-title']"));
    activityWin  = element(by.xpath("//div[text()='Create Activity']"));
    commentsText = element(by.xpath("//p[contains(text(),'Comments')]/following-sibling::textarea"));
    createButton = element(by.xpath("//button[text()='Create']"));
    ctrlButton   = element(by.id("idSIButton9"));
    alert        = element(by.id("client-snackbar"));

    public getPlusByDay(day: String) {
        return element(by.xpath("//span[text()='" + day + "']/preceding-sibling::span"));
    }

    public getFieldByName(fieldName: String) {
        return element(by.xpath("//p[contains(text(),'" + fieldName + "')]/following-sibling::div/input"));
    }
}