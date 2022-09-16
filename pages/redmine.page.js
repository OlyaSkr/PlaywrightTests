class RedminePage {
  constructor(page) {
        this.page = page;
        this.reportLabel = page.locator('h2');
  }
  async reportLabelIsVisible() {
    await this.reportLabel.isVisible();
  }
}
  module.exports = { RedminePage };