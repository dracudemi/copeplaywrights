import { test, expect } from "@playwright/test";
import constants  from "../../dataNew/constants.json";
test("Should load home page with correct title", async ({ page }) => {
    // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // Assert header text
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare providr')
});

test("Should have a working link to the appointment page", async ({page},testInfo)=>{

console.log(`Check jsom:${JSON.stringify(testInfo.config)}`);
    

});

test("Fixtures", async ({page,browserName},testInfo)=>{

console.log(`Check json:${browserName}`);
    

});

test("Constants", async ({page},testInfo)=>{

console.log(`Check json:${JSON.stringify(constants.STATUSCODE)}`);
    

});


test.only("Reusauable demo", async ({page},testInfo)=>{

  await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
  let ele=page.getByRole('link', { name: 'Make Appointment' })
  await ele.click();
 

});
