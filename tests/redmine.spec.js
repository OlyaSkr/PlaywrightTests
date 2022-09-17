// @ts-check
const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/home.page.js");
const { LoginPage } = require("../pages/login.page.js");
const { SignUpPage } = require("../pages/signup.page.js");
const { DownloadPage } = require("../pages/download.page.js");
const { IssuesPage } = require("../pages/issues.page.js");
const { RedminePage } = require("../pages/redmine.page.js");
let homePage;
let loginPage;
let signUpPage;
let downloadPage;
let issuesPage;
let redminePage;

test.describe("redmine page", () => {
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        signUpPage = new SignUpPage(page);
        downloadPage = new DownloadPage(page);
        issuesPage = new IssuesPage(page);
        redminePage = new RedminePage(page);
        await homePage.goto("https://www.redmine.org/");
    });
    test("sign up to redmine", async ({ page }) => {
        await homePage.signUpClick();
        await signUpPage.usernameInputFill("New_testing_account");
        await signUpPage.passwordInputFill("rtnk");
        await signUpPage.passwordConfirmationInputFill("rtnk");
        await signUpPage.userFirstnameInputFill("User");
        await signUpPage.userLastnameInputFill("Testing");
        await signUpPage.userEmailInputFill("newtestingaccount@ukr.net");
        await signUpPage.submitButtonClick();
        await loginPage.flashNoticeIsVisible();
    });
    test("sign in to redmine", async ({ page }) => {
        await homePage.signInClick();
        await loginPage.usernameInputFill("Test__account");
        await loginPage.passwordInputFill("er23kl");
        await loginPage.submitButtonClick();
        await homePage.accountNameEnabled();
    });
    test("search in redmine from home page", async ({ page }) => {
        await homePage.searchInputFill("news");
        await page.keyboard.press("Enter");
        await expect(page).toHaveTitle("Search - Redmine");
    });

    test("download files in redmine", async ({ page }) => {
        await homePage.downloadButtonClick();
        const [download] = await Promise.all([
            page.waitForEvent("download"),
            await downloadPage.redmineLinkClick(),
        ]);
        const suggestedFileName = download.suggestedFilename();
        const filePath = "download/" + suggestedFileName;
        await download.saveAs(filePath);
    });
    test("brief description of all issues", async ({ page }) => {
        await homePage.issuesLinkClick();
        await issuesPage.issuesLinkClick();
        await redminePage.reportLabelIsVisible();
        await expect(page).toHaveTitle("Redmine");
    });
});
