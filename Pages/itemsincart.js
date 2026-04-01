class itemsincart{
constructor (page){
    this.page=page;
this.placeorder=page.locator('//button[@class="btn btn-success"]')
    this.name=page.locator('#name')
    this.country=page.locator('#country')
    this.city=page.locator("#city")
    this.creditcard=page.locator("#card")
    this.month=page.locator("#month")
    this.year=page.locator("#year")
    this.confirm=page.locator('(//button[@class="btn btn-primary"])[3]')
    this.ok=page.locator('//button[@class="confirm btn btn-lg btn-primary"]')
}
async submitorder(){

   await this.page.pause()
    await this.placeorder.click()
    await this.name.fill('Sriram')
    await this.country.fill('India')
    await this.city.fill('TVM')
    await this.creditcard.fill('2452123')
    await this.month.fill('June')
    await this.year.fill('1994')
    await this.confirm.click()
    await this.ok.click()
}
}
module.exports=itemsincart;
