import { test,expect } from "@playwright/test";

test("upload Files", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#singleFileInput").setInputFiles("Playwright class notes.pdf");

    await page.waitForTimeout(5000);

})
