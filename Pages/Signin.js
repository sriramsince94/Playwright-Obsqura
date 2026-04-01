const test = require("node:test");
class Signin{
constructor(page){
    this.page=page;
    this.loginclick=page.locator('#login2')
    this.username=page.locator('#loginusername')
    this.password=page.locator('#loginpassword')
    this.loginselection=page.locator('xpath=(//button[@class="btn btn-primary"])[3]')

    this.signup=page.locator('#signin2')
    this.upusername=page.locator('#sign-username')
    this.uppassword=page.locator('#sign-password')
    this.confirm=page.locator('//button[@class="btn btn-primary"]').nth(1)

    this.close=page.locator('//button[@class="btn btn-secondary"]').nth(2)
    this.signout=page.locator('#logout2')

   

}
async validlogin(){
    await this.loginclick.click()
    await this.username.fill('user24$')
    await this.password.fill('test24$')
    await this.loginselection.click()
    await this.page.pause()
}
async signuplogin(){
    await this.signup.click()
    await this.upusername.fill('dingan94$')
    await this.uppassword.fill('testdingan94$')
    await this.confirm.click()


}
async closebutton(){
 await this.loginclick.click()
 await this.username.fill('user24$')
  await  this.password.fill('test24$')
   await  this.close.click()
}
async logout(){
    await this.loginclick.click()
    await this.username.fill('user24$')
    await this.password.fill('test24$')
    await this.loginselection.click()
    await this.signout.click()
}
async invalidlogin(username,password){

    await this.loginclick.click()
    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginselection.click()
    return this.page

}
}
module.exports=Signin;
