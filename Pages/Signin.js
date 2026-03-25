class Signin{
constructor(page){
    this.page=page;

}
async enterusernamevalidlogin(){
    await this.page.locator('#loginusername').fill('user24$')
}
async enterpasswordvalidlogin(){
    await this.page.locator('#loginpassword').fill('test24$')
}
async login(){
    await this.page.getByRole('button', { name: 'Log in' }).click();
}
}
module.exports=Signin;