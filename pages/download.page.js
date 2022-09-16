class DownloadPage {
  constructor(page) {
        this.page = page;
        this.redmineLink = page.locator('[href*="redmine-4.2.7.tar.gz"]');     
  }
  async redmineLinkClick() {
    await this.redmineLink.click();
  }
}
  module.exports = { DownloadPage };
