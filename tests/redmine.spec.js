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
        // click on the sign up button
        await homePage.signUpClick();
        // enter username in the username field;
        await signUpPage.usernameInputFill("New_testing_account");
        // enter password in the password field
        await signUpPage.passwordInputFill("rtnk");
        // enter confirmation password in the password field
        await signUpPage.passwordConfirmationInputFill("rtnk");
        // enter firstname in the input field
        await signUpPage.userFirstnameInputFill("User");
        // enter lastname in the input field
        await signUpPage.userLastnameInputFill("Testing");
        // enter email in the input field
        await signUpPage.userEmailInputFill("newtestingaccount@ukr.net");
        // clicl on the submit button
        await signUpPage.submitButtonClick();
        //  await loginPage.pause(4000);
        // check that successful registration message is enabled
        await loginPage.flashNoticeIsVisible();
        // await expect(page.locator('.view label')).toHaveTitle('Redmine');
    });
    test("sign in to redmine", async ({ page }) => {
        // click on the sign in button
        await homePage.signInClick();
        // enter user name in the username field;
        await loginPage.usernameInputFill("Test__account");
        // enter password in the password field
        await loginPage.passwordInputFill("er23kl");
        // click on the submit button
        await loginPage.submitButtonClick();
        // check that the inscription on the site 'my account' is visible
        await homePage.accountNameEnabled();
    });
    test("search in redmine from home page", async ({ page }) => {
        // add news to the search field
        await homePage.searchInputFill("news");
        await page.keyboard.press("Enter");
        await expect(page).toHaveTitle("Search - Redmine");
    });

    test("download files in redmine", async ({ page }) => {
        await homePage.downloadButtonClick();
        const [download] = await Promise.all([
            page.waitForEvent("download"),
            await downloadPage.redmineLinkClick(),
            //downloadPage.locator('[href*="redmine-4.2.7.tar.gz"]').click(),
        ]);
        const suggestedFileName = download.suggestedFilename();
        const filePath = "download/" + suggestedFileName;
        await download.saveAs(filePath);
    });
    test("brief description of all issues", async ({ page }) => {
        // click on the issues link
        await homePage.issuesLinkClick();
        // click on the brief description link
        await issuesPage.issuesLinkClick();
        // check that reports are visible
        await redminePage.reportLabelIsVisible();
        // check page title
        await expect(page).toHaveTitle("Redmine");
    });
});
