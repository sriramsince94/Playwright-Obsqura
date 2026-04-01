const {test,expect}=require('@playwright/test') ;
const Signin=require('../Pages/Signin')
test.beforeEach('url',async({page})=>{

await page.goto ("https://demoblaze.com/");
})
test("Sign in", async ({ page }) => {
    const Signinpage = new Signin(page);
    await Signinpage.validlogin();
    await page.pause()
    await expect(page.locator('#logout2')).toHaveText('Log out')
    await page.pause()     
    
});
test("Sign up", async ({ page }) => {
    const Signinpage=new Signin(page);
    await Signinpage.signuplogin()
});
test("Close", async ({ page }) => {
    const Signinpage=new Signin(page);
    await Signinpage.closebutton()
});
test("Signout", async ({ page }) => {
    const Signinpage=new Signin(page);
    await Signinpage.logout()
});
