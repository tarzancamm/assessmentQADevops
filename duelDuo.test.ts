
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


// Two extra tests

test('Draw button displays the div with id = choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(5000)

    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to Duo button displayed the div with id = player-duo', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(5000)

    const add = await driver.findElement(By.xpath('//button[@class="bot-btn"]'))
    await add.click()
    await driver.sleep(5000)

    const playerDuo = await driver.findElement(By.id('player-duo'))
    const nextDisplayed = await playerDuo.isDisplayed()
    expect (nextDisplayed).toBe(true)
})