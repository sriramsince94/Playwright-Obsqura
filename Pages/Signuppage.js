class Signuppage{
constructor(page){
    this.page=page;

}
async accessurl(){
 await this.page.goto("https://demoblaze.com/");
}
async enterusername(){
    await this.page.locator('#sign-username').fill('user29$')
}
async enterpassword(){
    await this.page.locator('#sign-password').fill('test29$')
}
async signup(){
    await this.page.getByRole('button', { name: 'Sign up' }).click();
}
}
module.exports=Signuppage;