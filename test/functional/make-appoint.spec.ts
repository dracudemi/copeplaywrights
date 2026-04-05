import { test, expect } from '@playwright/test';
require('dotenv').config({ path: '../.env' }); // Specify correct path if needed


test.describe('Make Appointment functionality',{annotation:{type:'Story' ,description:'JIIRA-2678'}}, () => {
    test.beforeEach('Go to Make Appointment Page', async ({ page },testInfo) => {
       // await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');

       //get url from config file 

       const envConfig = testInfo.project.use as any;
       await page.goto(envConfig.appURL);
       
 // await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
  await expect(page.locator('h1')).toContainText('CURA Healthcare Service');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.getByText('Please login to make')).toBeVisible();
  await page.getByLabel('Username').click();
    console.log(`Username Used: ${process.env.TESTUSERNAME}`);
  console.log(`Password Used: ${process.env.TESTPASSWORD}`);

  await page.getByLabel('Username').fill(process.env.TESTUSERNAME!);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(process.env.TESTPASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');
 let fullpage = await page.screenshot({fullPage:true});
 test.info().attach('Full Page Screenshot',{body:fullpage,contentType:'image/png'});
    });

    test('Make Appoint withb Non Default Values ', async ({ page },testInfo) => {
  //await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
 // await page.getByRole('heading', { name: 'Make Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');
  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.getByText('Medicaid').click();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill('15/10/2025');
   await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press('Enter');
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Test Appointment');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Appointment Confirmation');
});

});

