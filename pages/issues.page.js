class IssuesPage {
  constructor(page) {
        this.page = page;
        this.issuesLink = page.locator('[href*="issues/report"]');
       
  }
  async issuesLinkClick() {
    await this.issuesLink.click();
  }

}
  module.exports = { IssuesPage };