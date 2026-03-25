const {test,expect}=require('@playwright/test') ;
test("Test case Ten  login with valid credentials & Logout", async({page})=>
{
await page.goto("https://demoblaze.com/");
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill("user24$")
await page.locator('#loginpassword').fill("test24$")
await page.pause()
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause()
await page.locator('#logout2').click()
await page.pause()
});