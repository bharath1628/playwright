import{test,expect} from "@playwright/test";

test("Simple alert", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");

    page.on("dialog", async dialog=>{
        await dialog.accept();
    })
    await page.locator('button[class="btn btn-danger"]').click();

}) 

test("Confirmation  alert", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog", async dialog=>{
        await dialog.dismiss();
    })
    await page.locator('a[href="#CancelTab"]').click();
    await page.locator('button[class="btn btn-primary"]').click();

})

test("prompt  alert", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    page.on("dialog", async dialog=>{
        await dialog.accept("bharath");
    })
    await page.locator('a[href="#Textbox"]').click();
    await page.locator('button[class="btn btn-info"]').click();
})

