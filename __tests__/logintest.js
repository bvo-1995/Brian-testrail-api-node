// const puppeteer = require('puppeteer');

// describe('Login Page', () => {

//     beforeEach(() => {

//     })

//     afterAll(() => {
    
//     })

//     afterEach(() => {
        
//     })
//     test('C243 Login Test', async() => { 
//         const navigationPromise = page.waitForNavigation()
      
//         await page.goto('https://qa-admin.nativo.com/login')
        
//         await page.setViewport({ width: 1280, height: 1338 })
        
//         await page.waitForSelector('.ntv-grid-row:nth-child(1) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
//         await page.click('.ntv-grid-row:nth-child(1) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
        
//         await page.type('.ntv-grid-row:nth-child(1) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input', 'mishtest@nativo.com')
        
//         await page.waitForSelector('.ntv-grid-row:nth-child(2) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
//         await page.click('.ntv-grid-row:nth-child(2) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
        
//         await page.type('.ntv-grid-row:nth-child(2) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input', 'Nativo123$')
    
//         await page.waitForSelector('div > .ntv-login__form > .ntv-grid-row > .ntv-grid-col > .ntv-login__button')
//         await page.click('div > .ntv-login__form > .ntv-grid-row > .ntv-grid-col > .ntv-login__button')
        
//         await navigationPromise
        
//         await page.waitForSelector('body > #dashboard_page > nav > #mainNav > #navCampaigns')
//         await page.click('body > #dashboard_page > nav > #mainNav > #navCampaigns')
        
//         return await navigationPromise
    
            
//     }, 16000);

//     test('Login Second Test', async() => { 
//         const navigationPromise = page.waitForNavigation()
      
//         await page.goto('https://qa-admin.nativo.com/publications')
        
//         await page.setViewport({ width: 1280, height: 1338 })
        
//         return await navigationPromise
            
//     }, 16000);
// });
