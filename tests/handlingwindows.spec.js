import{test, expect} from"@playwright/test";

test("handling windows", async({browser})=>{
    const Context = await browser.newContext();
    const page1 = await Context.newPage();
    const page2 = await Context.newPage();

    await page1.goto("https://testautomationpractice.blogspot.com/");
    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//task1:
    await page1.getByPlaceholder("Enter Name").fill("bharath");
    await page1.getByPlaceholder("Enter EMail").fill("bharath111@gmail.com");
//task2:
    await page2.getByPlaceholder("Username").fill("Admin");
    await page2.getByPlaceholder("Password").fill("admin123");
    await page2.getByRole("button",{name:" Login "}).click();

})


