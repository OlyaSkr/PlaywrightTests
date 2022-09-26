# PlaywrightTests with html and allure reports
## Description

This repository contains tests written in Playwright js to test the site https://www.redmine.org/ Contains of:

* Page Object Model
* Tests are located in tests folder
* Allure report integration
  
  #### devDependencies:
* @playwright/test: 1.25.2
* allure-commandline: 2.18.1
* allure-playwright: 2.0.0-beta.19
  
## Steps to run

* Clone the repository using "git clone "
* npm init
* npm ci
* npx playwright test
* npm run allure:generate
## License
  ISC