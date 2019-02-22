const puppeteer = require('puppeteer');
const { expect } = require('chai');

module.exports = async function(page) {

    const navigationPromise = page.waitForNavigation()

    await page.goto('https://www.secretflying.com/search2/?cityFrom=Los+Angeles&cityTo=&month=')
  
    await page.setViewport({ width: 1280, height: 1338 })
    
    await page.waitForSelector('.container > .menu-main-container > #menu-main-menu > #menu-item-42258 > a')
    await page.click('.container > .menu-main-container > #menu-main-menu > #menu-item-42258 > a')
    
    await page.waitForSelector('#menu-item-42258 > #mapul > #menuRegionsLables > #menuRegionLabel8 > .menuRegionLabelText')
    await page.click('#menu-item-42258 > #mapul > #menuRegionsLables > #menuRegionLabel8 > .menuRegionLabelText')
    
    await navigationPromise
    
    await page.waitForSelector('.container > .menu-main-container > #menu-main-menu > #menu-item-40524 > a')
    await page.click('.container > .menu-main-container > #menu-main-menu > #menu-item-40524 > a')
    
    await navigationPromise
    
    await page.waitForSelector('.container > .menu-main-container > #menu-main-menu > #menu-item-40523 > a')
    await page.click('.container > .menu-main-container > #menu-main-menu > #menu-item-40523 > a')

    await navigationPromise

    await page.close();

}
