const puppeteer = require('puppeteer');

describe('First Tests', () => {
    beforeAll(() => {

    })

    afterAll(() => {
        console.log(this);
    })

    test('First Test', async() => {
        let page = await browser.newPage();
    
        await page.goto('http://google.com');
        await page.waitForSelector('.NKcBbd');
    
        const html = await page.$eval('.NKcBbd', e => e.innerHTML);
        expect(html).toBe('Celebrating Black women and girls\' influence on the world');

        await page.close();
    
        });

    test('Second Test', async() => {
        let page = await browser.newPage();
    
        await page.goto('http://google.com');
        await page.waitForSelector('.NKcBbd');
    
        const html = await page.$eval('.NKcBbd', e => e.innerHTML);
        expect(html).toBe('Celebrating Black women and girls\' influence on the world');

        await page.close();
    
        });
});
