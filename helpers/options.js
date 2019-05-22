module.exports = {
    baseUrl: 'https://qa-admin.nativo.com',
    // screenshotDir: 'tests/accepance_tests/screenshots/',
    screenshotSubDir: 'QA/',
    browser: {
        headless: false,
        // slowMo: 50
    },
    page: {
        viewPortDimensions: {
            width: 1280,
            height: 800
        }
    }
}

