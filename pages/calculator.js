class CalculatorPage {
    get computeEngineTab() { return $('#tab-item-1'); }
    get instancesInput() { return $('#input_83'); }
    get operatingSystemDropdown() { return $('#select_value_label_80'); }
    get vmClassDropdown() { return $('#select_value_label_81'); }
    get instanceTypeDropdown() { return $('#select_value_label_83'); }
    get addGPUsCheckbox() { return $('md-checkbox[aria-label="Add GPUs"]'); }
    get gpuTypeDropdown() { return $('#select_value_label_398'); }
    get localSSDDropdown() { return $('#select_value_label_84'); }
    get datacenterDropdown() { return $('#select_value_label_85'); }
    get committedUsageDropdown() { return $('#select_value_label_86'); }
    get addToEstimateButton() { return $('button[aria-label="Add to Estimate"]'); }
    
    async fillForm(data) {
        await this.computeEngineTab.click();
        await this.instancesInput.setValue(data.instances);
        await this.operatingSystemDropdown.selectByVisibleText(data.operatingSystem);
        await this.vmClassDropdown.selectByVisibleText(data.vmClass);
        await this.instanceTypeDropdown.selectByVisibleText(data.instanceType);
        await this.addGPUsCheckbox.click();
        await this.gpuTypeDropdown.selectByVisibleText(data.gpuType);
        await this.localSSDDropdown.selectByVisibleText(data.localSSD);
        await this.datacenterDropdown.selectByVisibleText(data.datacenter);
        await this.committedUsageDropdown.selectByVisibleText(data.committedUsage);
        await this.addToEstimateButton.click();
    }
}

module.exports = new CalculatorPage();
