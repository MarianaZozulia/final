const HomePage = require('../../page_objects/homePage');
const CalculatorPage = require('../../page_objects/calculator');
const testData = require('../../test_data.json');

describe('Google Cloud Calculator', () => {
    it('should calculate pricing correctly', () => {
        // Navigate to Google Cloud
        HomePage.open();
        HomePage.search('Google Cloud Platform Pricing Calculator');

        // Click on the correct search result
        const calculatorLink = $('a[href*="calculator"]');
        calculatorLink.click();

        // Fill form data
        CalculatorPage.computeEngineTab.click();
        // Fill other fields based on testData
        // ...

        // Validate fields
        const price = $('div.estimation-result');
        expect(price).to.include(testData.expectedPrice);
    });
});
