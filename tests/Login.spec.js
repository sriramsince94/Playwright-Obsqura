const {test,expect}=require('@playwright/test') ;
const credentials=require('../Utils/credentials.json')
const Signin=require('..//Pages/Signin')

test.beforeEach('url',async({page})=>{

await page.goto ("https://demoblaze.com/");
})

for(const data of credentials){

test(`Invalid credentials for ${data.username},${data.password}`,async({page})=>{

    const login=new Signin(page)
    await login.invalidlogin(data.username,data.password)
    await page.on('dialog',async(dialog)=>{
    await dialog.accept()
    })
    await expect(page).toHaveURL('https://demoblaze.com/')
})

}
