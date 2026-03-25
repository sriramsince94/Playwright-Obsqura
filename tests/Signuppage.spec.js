const {test,expect}=require('@playwright/test') ;
const Signuppage = require('../Pages/Signuppage');
test.only("Test case one Page Signup", async({page})=>
{
const obj=new Signuppage(page);
await obj.accessurl()
await obj.enterusername()
await obj.enterpassword()
await obj.signup()
});
test('Test case two page close',async({page})=>{
await page.goto("https://demoblaze.com/");
await page.pause();
await page.locator("#signin2").click();
await page.pause();
await page.locator("#sign-username").fill("User2");
await page.locator("#sign-password").fill("close")
await page.pause();
await page.locator('//button[@class="btn btn-secondary"]').nth(1).click();
await page.pause();
});