import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";

const jsonReports = path.join(process.cwd(), "/Reports/json");
const htmlReports = path.join(process.cwd(), "/Reports/html");
const targetJson  = jsonReports + "/cucumber_report.json";

const cucumberReporterOptions = {
    name: "Cucumber Darko Report",
    theme: "hierarchy",
    output: htmlReports + "/cucumber_report.html",
    jsonFile: targetJson,
    reportSuiteAsScenarios: true,
    metadata: {
        "App Version":"RC 1.10",
        "Test Environment": "Production",
        "Browser": "Chrome",
        "Platform": "MacOS X Mojave",
        "Parallel": "Scenarios",
        "Executed": "Local"
    },
};

export class Reporter {

    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport() {
        try {
            reporter.generate(cucumberReporterOptions);
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}