import { test, expect } from '@playwright/test';
import filehelper from '../helper/filehelper.ts';
import TestData from "../../dataNew/test-data.ts"
import {log} from "../helper/logger.ts";
//const testData = TestData.makeAppointTestData();

const filepath=process.cwd()+'/dataNew/functional/make-appoint.csv';
const testData=filehelper.readCSVData(filepath)

for (const testCase of testData) {
   
    test.describe('Make Appointment functionality',{annotation:{type:'Story' ,description:'JIIRA-2678'}},() => {
    test.beforeEach('Go to Make Appointment Page', async ({ page },testInfo) => {
     
      const envConfig = testInfo.project.use as any;
     await log ("log",`Test Start ${envConfig.envName}`);
      // await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
        await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
  await expect(page.locator('h1')).toContainText('CURA Healthcare Service');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.getByText('Please login to make')).toBeVisible();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
 
  const loginCookie = await page.context().cookies();
  process.env.LOGINCOOKIE = JSON.stringify(loginCookie);
  console.log(`Login Cookie Set: ${process.env.LOGINCOOKIE}`);

  await expect(page.locator('h2')).toContainText('Make Appointment');
 let fullpage = await page.screenshot({fullPage:true});
 test.info().attach('Full Page Screenshot',{body:fullpage,contentType:'image/png'});
    });

    test(`${testCase.testId} - Make Appointment with Non Default Values`, async ({ page },testInfo) => {
  //await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
 // await page.getByRole('heading', { name: 'Make Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');
  await page.getByLabel('Facility').selectOption(testCase.facility);
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.getByText('Medicaid').click();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill(testCase.visitDate);
   await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press('Enter');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill(testCase.comment);
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Appointment Confirmation');
});

})
}



