const {test,expect}=require('@playwright/test') ;
const Purchase=require('../Pages/order');
const Selectproduct = require('../Pages/order');
const itemsInCart=require('../Pages/itemsincart');


test.beforeEach('url',async({page})=>{

await page.goto ("https://demoblaze.com/");
})


test("Buy Phone", async({page})=>
{
    const phonep=new Selectproduct(page)
     phonep.validlogin()
     await page.pause()
page.on('dialog',async (dialog)=>{
    await expect(dialog.message()).toBe('Product added.')
    dialog.accept()
})
await page.pause()
await phonep.buyphone()
const cart = new itemsInCart(page);
await cart.submitorder();
});

test("Buy Monitor",async({page})=>
{
    const monitorp=new Selectproduct(page)
    monitorp.validlogin()
    await page.pause()
    page.on('dialog',async (dialog)=>{
    await expect(dialog.message()).toBe('Product added.')
    dialog.accept()
})
await page.pause()
    await monitorp.buymonitor()
    const cart = new itemsInCart(page);
    await cart.submitorder();
});