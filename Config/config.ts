import { browser, Config } from "protractor";
import { Reporter } from "../Runner/reporter";
const jsonReports = process.cwd() + "/Reports/json";

export const config: Config = {
  
    baseUrl: "https://nova.itexico.com",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    capabilities: {
        browserName: "chrome",
        "chromeOptions": {
            "args": [
                "--headless",
                "--disable-cache",
                "--disable-infobars",
                "--window-size=1920,1080",
            ],
            "prefs": {
                "download": {
                  "prompt_for_download": false,
                  "default_directory": process.cwd() + "/Downloads/",
                }
            }
        }
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../Features/**/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: [
            "../../typeScript/Steps/**/*.js",
            "../../typeScript/Steps/*.js",
            "../../typeScript/Runner/**/*.js",
            "../../typeScript/Runner/*.js",
        ],
        strict: true,
        plugin: "json",
        tags: "@Nova",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};