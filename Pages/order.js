const test = require("node:test");
const itemsincart=require('./itemsincart')


class Selectproduct{
constructor(page){
    this.page=page;
    this.loginbutton=page.locator('#login2')
    this.username=page.locator('#loginusername')
    this.password=page.locator('#loginpassword')
    this.loginselection=page.locator('xpath=(//button[@class="btn btn-primary"])[3]')
    this.phone=page.locator('xpath=(//a[@class="hrefch"])[1]')
    this.phonecart=page.locator('xpath=//a[@class="btn btn-success btn-lg"]')
    this.cart=page.locator('xpath=//a[@id="cartur"]')


this.loginbutton=page.locator('#login2')
    this.username=page.locator('#loginusername')
    this.password=page.locator('#loginpassword')
this.monitor=page.locator('//a[@class="list-group-item"]').nth(3)
this.monitorselect=page.locator('//a[@class="hrefch"]').nth(0)
this.monitorcart=page.locator('//a[@class="btn btn-success btn-lg"]')
this.cart=page.locator('xpath=//a[@id="cartur"]')
}

async validlogin(){
    await this.loginbutton.click()
    await this.username.fill('user24$')
    await this.password.fill('test24$')
    await this.loginselection.click()
    await this.page.pause()

}
async buyphone(){
    await this.page.pause()
   await this.phone.click()
   await this.page.pause()
   await this.phonecart.click()
   await this.page.pause()
   await this.cart.click()
   return new itemsincart(this.page);
}
async buymonitor(){
    await this.page.pause()
    await this.monitor.click()
    await this.page.pause()
    await this.monitorselect.click()
    await this.page.pause()
    await this.monitorcart.click()
    await this.page.pause()
    await this.cart.click()
    return new itemsincart(this.page);
}
}
module.exports=Selectproduct;