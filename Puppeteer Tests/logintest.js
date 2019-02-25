const puppeteer = require('puppeteer');
const { expect } = require('chai');
const testrails = require('./utils.js');

module.exports = async function(page) {
    const navigationPromise = page.waitForNavigation()
  
    await page.goto('https://qa-admin.nativo.com/login')
    
    await page.setViewport({ width: 1280, height: 1338 })
    
    await page.waitForSelector('.ntv-grid-row:nth-child(1) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
    await page.click('.ntv-grid-row:nth-child(1) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
    
    await page.type('.ntv-grid-row:nth-child(1) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input', 'qatester@nativo.com')
    
    await page.waitForSelector('.ntv-grid-row:nth-child(2) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
    await page.click('.ntv-grid-row:nth-child(2) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input')
    
    await page.type('.ntv-grid-row:nth-child(2) > .ntv-grid-col > .ntv-input > .ntv-input__wrapper > .ntv-input__input', 'Nativo123$')

    await page.waitForSelector('div > .ntv-login__form > .ntv-grid-row > .ntv-grid-col > .ntv-login__button')
    await page.click('div > .ntv-login__form > .ntv-grid-row > .ntv-grid-col > .ntv-login__button')
    
    await navigationPromise
    
    await page.waitForSelector('body > #dashboard_page > nav > #mainNav > #navCampaigns')
    await page.click('body > #dashboard_page > nav > #mainNav > #navCampaigns')
    
    await navigationPromise
    
    await page.close()
}