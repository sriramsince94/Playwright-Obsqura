const {test,expect}=require('@playwright/test') ;
test("Test case seven select product", async({page})=>
{
await page.goto("https://demoblaze.com/");
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill("user24$")
await page.locator('#loginpassword').fill("test24$")
await page.pause()
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause()
await page.locator('//a[@class="hrefch"]').nth(0).click()
await page.pause()
await page.locator('//a[@class="btn btn-success btn-lg"]').click()
await page.pause()
});
test("Test case eight select product add details and purchase", async({page})=>
{
await page.goto("https://demoblaze.com/");
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill("user24$")
await page.locator('#loginpassword').fill("test24$")
await page.pause()
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause()
await page.locator('#cartur').click()
await page.pause()
await page.locator('//button[@class="btn btn-success"]').click()
await page.pause()
await page.locator('#name').fill('Sriram')
await page.locator('#country').fill('India')
await page.locator('#city').fill('TVM')
await page.locator('#card').fill('2452')
await page.locator('#month').fill('June')
await page.locator('#year').fill('2026')
await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
});
test.only("Test case nine select product monitor add details and purchase", async({page})=>
{
await page.goto("https://demoblaze.com/");
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill("user24$")
await page.locator('#loginpassword').fill("test24$")
await page.pause()
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause()
await page.locator('//a[@class="list-group-item"]').nth(3).click()
await page.pause()
await page.locator('//a[@class="hrefch"]').nth(0).click()
await page.pause()
await page.locator('//a[@class="btn btn-success btn-lg"]').click()
await page.locator('#cartur').click()
await page.pause()
await page.locator('//button[@class="btn btn-success"]').click()
await page.locator('#name').fill('Sriram')
await page.locator('#country').fill('India')
await page.locator('#city').fill('TVM')
await page.locator('#card').fill('2452')
await page.locator('#month').fill('June')
await page.locator('#year').fill('2026')
await page.locator('//button[@class="btn btn-primary"]').nth(2).click()
});