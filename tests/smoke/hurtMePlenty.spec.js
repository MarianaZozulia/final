const homePage = require('../pages/homePage');
const calculatorPage = require('../pages/calculator');
const testData = require('../config/test_data.json');

describe('Hurt Me Plenty Test', () => {
    it('should fill and verify Google Cloud Pricing Calculator', async () => {
        await homePage.open();
        await homePage.search('Google Cloud Platform Pricing Calculator');
        await $('h3*=Google Cloud Platform Pricing Calculator').click();

        await calculatorPage.fillForm(testData);

        // Verifications
        const vmClass = await $('div=VM Class: regular').isDisplayed();
        const instanceType = await $('div=Instance type: n1-standard-8').isDisplayed();
        const region = await $('div=Region: Frankfurt').isDisplayed();
        const ssd = await $('div=Local SSD: 2x375 GiB').isDisplayed();
        const commitment = await $('div=Commitment term: 1 Year').isDisplayed();

        expect(vmClass).toBe(true);
        expect(instanceType).toBe(true);
        expect(region).toBe(true);
        expect(ssd).toBe(true);
        expect(commitment).toBe(true);

        const totalCost = await $('b=1,083.33').isDisplayed(); // Replace with actual value
        expect(totalCost).toBe(true);
    });
});
