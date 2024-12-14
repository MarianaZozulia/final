class HomePage{
    get searchButton() { return $('button[aria-label="Search"]'); }
    get searchInput() { return $('input[aria-label="Search"]'); }

    async open() {
        await browser.url('/');
    }

    async search(query) {
        await this.searchButton.click();
        await this.searchInput.setValue(query);
        await browser.keys('Enter');
    }
}
module.exports = new HomePage();