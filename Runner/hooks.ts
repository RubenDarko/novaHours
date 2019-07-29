import { BeforeAll, After, AfterAll, Status, setDefaultTimeout } from "cucumber";
import { browser } from "protractor";
import { config } from "../Config/config";

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        //ScreenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll(async () => {
    await browser.quit();
});