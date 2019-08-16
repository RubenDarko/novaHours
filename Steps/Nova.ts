import { Nova } from "../Pages/Nova";
import { Jira } from "../Pages/Jira";
import { Given, When, Then } from "cucumber";
import { Key, protractor, browser } from "protractor";

const USER = "my.email@itexico.com";
const PASS = "myP455w0rd";
const EC   = protractor.ExpectedConditions;
const nova = new Nova();
const jira = new Jira();

Given(/^Navigation to Nova page starts$/, async () => {
    await browser.wait(EC.visibilityOf(nova.singInLogo));
    await nova.singInLogo.click();
});

When(/^User logs in Nova$/, async () => {
    await browser.wait(EC.elementToBeClickable(nova.userField));
    await nova.userField.sendKeys(USER);
    await browser.wait(EC.elementToBeClickable(nova.ctrlButton));
    await nova.ctrlButton.click();
    await browser.wait(EC.elementToBeClickable(nova.passField));
    await nova.passField.sendKeys(PASS);
    await browser.wait(EC.elementToBeClickable(nova.ctrlButton));
    await nova.ctrlButton.click();
    await browser.wait(EC.elementToBeClickable(nova.ctrlButton));
    await nova.ctrlButton.click();
});

Then(/^Fill out hours in form$/, async (data) => {
    const rows = data.hashes();
    /*let jiraTickets:string = "id in (";
    let novaWindow;
    let jiraWindow;
    let comment;

    for (const row of rows) {
        jiraTickets= jiraTickets + row.Ticket + ",";
    }

    await browser.executeScript('window.open();');
    await browser.getAllWindowHandles().then(function (handles) {
        novaWindow=handles[0];
        jiraWindow=handles[1];
    });
    await browser.switchTo().window(jiraWindow);
    await browser.get("https://etaluma.atlassian.net/issues/");

    await browser.wait(EC.visibilityOf(jira.loginLink));
    await jira.loginLink.click();

    await browser.wait(EC.visibilityOf(jira.usernameField));
    await jira.usernameField.sendKeys(USER);
    await jira.submitButton.click();

    await browser.wait(EC.visibilityOf(jira.passwordField));
    await jira.passwordField.sendKeys(PASS);
    await jira.submitButton.click();

    await browser.wait(EC.visibilityOf(jira.searchField));
    await jira.searchField.clear();
    await jira.searchField.sendKeys(jiraTickets + Key.BACK_SPACE + ")" + Key.ENTER);

    await browser.switchTo().window(novaWindow);*/

    for (const row of rows) {
        await browser.wait(EC.elementToBeClickable(nova.getPlusByDay(row.Day)));
        await browser.executeScript("arguments[0].click();", nova.getPlusByDay(row.Day));

        await browser.wait(EC.visibilityOf(nova.activityWin));

        await nova.getFieldByName("Project").clear();
        await nova.getFieldByName("Project").sendKeys(row.Project + Key.TAB);

        await nova.getFieldByName("Categories").clear();
        await nova.getFieldByName("Categories").sendKeys(row.Categories);
        
        await nova.getFieldByName("Hours").clear();
        await nova.getFieldByName("Hours").sendKeys(row.Hours);

        await nova.getFieldByName("Ticket").clear();
        await nova.getFieldByName("Ticket").sendKeys(row.Ticket);

        await nova.commentsText.clear();
        /*await browser.switchTo().window(jiraWindow);
        await jira.getDescriptionByTicket(row.Ticket).getText().then(function (text) {
            comment=text;
        });
        await browser.switchTo().window(novaWindow);
        await nova.commentsText.sendKeys(comment);*/
        await nova.commentsText.sendKeys(row.Comments);

        await browser.wait(EC.elementToBeClickable(nova.createButton));
        await nova.createButton.click();

        await browser.wait(EC.visibilityOf(nova.alert));
        await nova.weekView.click();
        await browser.wait(EC.invisibilityOf(nova.alert));
    };
});