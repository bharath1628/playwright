import{test , expect} from "@playwright/test";

test("multiple Files", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#multipleFilesInput").setInputFiles(["B_BHARATH_Testing (4).pdf", "Playwright class notes.pdf"]);

    await page.waitForTimeout(3000);

});