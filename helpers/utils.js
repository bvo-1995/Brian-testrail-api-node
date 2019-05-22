const puppeteer = require('puppeteer');
const options = require('./options.js');

module.exports = {
    getBrowserAndPage: getBrowserAndPage,
    tearDown: tearDown,
    login: login
};

// Puppeteer setup functions
async function getBrowserAndPage() {
    browser = await puppeteer.launch(options.browser);

    page = await browser.newPage();
    page.setViewport(options.page.viewPortDimensions);

    await page.tracing.start({
        path: 'trace.json',
        screenshots: true
    });
    return [browser, page];
}

async function tearDown(browser, page) {
    await page.tracing.stop();
    browser.close();
}


// Helper Functions
async function login(user, page) {
    await page.click('[type=email]');
    await page.keyboard.type(user.email);

    await page.click('[type=password]');
    await page.keyboard.type(user.password);

    await page.click('[type=submit]');
}

