// @ts-check
import { test, expect } from '@playwright/test';

test('Update Profile', async({page}) =>{
  await page.goto("https://www.naukri.com/");
  await page.locator("//a[@id='login_Layer']").click();
  await page.locator("//label[contains(text(),'Username')]/following-sibling::input").fill("renukashivanioffc@gmail.com");
  await page.locator("//label[contains(text(),'Password')]/following-sibling::input").fill("Renu@1106");
  await page.locator("//button[text()='Login']").click();
  await page.waitForLoadState('load');
  await expect(page, "Checking whether user logged-in or not").toHaveURL("https://www.naukri.com/mnjuser/homepage");
  await page.locator("//div[contains(@class,'view-profile')]/a").click();
  await page.locator("//div[@id='lazyResumeHead']/descendant::span[@class='edit icon']").click();
  await page.locator("//button[text()='Save']").click();
  // let text = await page.locator("//span[contains(@class,'mod-date-val')]").innerText();
  // console.log(`text --> ${text}`)
  await expect(page.locator("//span[contains(@class,'mod-date-val')]"), "Validating modified date chnaged to Today or not").toContainText("Today");
})
