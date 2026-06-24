import{test , expect} from "@playwright/test";
import { table } from "node:console";
import { url } from "node:inspector";

test ("iFrames", async({page})=>{
    await page.goto("https://ui.vision/demo/iframes");
    const innerframes = await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"}) ;
    await innerframes.locator(".Id5V1").nth(1).click();
    await innerframes.locator(".fsHoPb").nth(0).click();
    await innerframes.locator('span[class="vRMGwf oJeWuf"]').getByText("Yes");
    await innerframes.getByRole("button", {name:"Next"}).click();
    await innerframes.locator(".zHQkBf").fill("Hii");
    await innerframes.locator(".tL9Q4c").fill("Hello");
    await innerframes.getByRole("button", {name:"Submit"}).click();
    await innerframes.waitForTimeout(4000);
}) 
