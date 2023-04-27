import loadingPage from '../pageobjects/dynamic-loading.page.js';


describe('My Dynamic Loading Page', () => {
    it('should verify that start button exists', async () => {
        await loadingPage.open();
        await expect(loadingPage.startButton).toBeExisting();
    });
    it('should click start button', async () => {
        await loadingPage.startButton.click()
        await loadingPage.helloWorld.waitForExist()
        await expect(loadingPage.helloWorld).toBeExisting()
    })
});