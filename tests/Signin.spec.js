const {test,expect}=require('@playwright/test') ;
test.only("Test case three login with valid credentials", async({page})=>
    {
    const Signin=require('../Pages/Signin');
    const obj=new Signin(page);
    await SigninPage.enterusernamevalidlogin()
    await SigninPage.enterpasswordvalidlogin()
    await SigninPage.login()
});
test("Test case four invalid username and valid password", async({page})=>
{
await page.goto("https://demoblaze.com/");
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill("User29$")
await page.locator('#loginpassword').fill("test24$")
await page.pause()
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause()
});
test("Test case five valid username and invalid password", async({page})=>
{
await page.goto("https://demoblaze.com/");
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill("User24$")
await page.locator('#loginpassword').fill("")
await page.pause()
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause()
});
test("Test case Six invalid username and invalid password", async({page})=>
{
await page.goto("https://demoblaze.com/");
await page.locator('#login2').click()
await page.pause()
await page.locator('#loginusername').fill("99")
await page.locator('#loginpassword').fill("22")
await page.pause()
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause()
});