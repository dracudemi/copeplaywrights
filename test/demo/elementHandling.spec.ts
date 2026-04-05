import { test, expect } from '@playwright/test';

test.describe('Make Appointment functionality', () => {
    test.beforeEach('Go to Make Appointment Page', async ({ page }) => {
       // await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
        await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
  await expect(page.locator('h1')).toContainText('CURA Healthcare Service');
 // await page.getByRole('link', { name: 'Make Appointment' }).click();
 //Enter key
  await page.getByRole('link', { name: 'Make Appointment' }).press('Enter');
  //Double click
  await page.getByRole('link', { name: 'Make Appointment' }).dblclick();
  //Right click
  await page.getByRole('link', { name: 'Make Appointment' }).click({ button: 'right' });
  //await page.getByRole('link', { name: 'Make Appointment' }).dblclick();
  //Hover
  await page.getByRole('link', { name: 'Make Appointment' }).hover();   

  //Timeout
  await page.getByRole('link', { name: 'Make Appointment' }).click({ timeout: 5000 });
  

  await expect(page.getByText('Please login to make')).toBeVisible();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  //Clear
    await page.getByLabel('Username').clear();
    //press Sequence
    await page.getByLabel('Username').pressSequentially('John Doe',{delay: 100} );
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');

    });

    test('Make Appoint withb Non Default Values ', async ({ page }) => {
  //await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
 // await page.getByRole('heading', { name: 'Make Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');
  //Dropdown 
  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  //label
  await page.getByLabel('Facility').selectOption({ label: 'Hongkong CURA Healthcare Center' });
  //index
  await page.getByLabel('Facility').selectOption({ index: 1 });

  //To Assert the count
    await expect(page.getByLabel('Facility').locator('option')).toHaveCount(3);
    //get all dropdwon options
    const options = await page.getByLabel('Facility').locator('option').allTextContents();
    console.log(options);
    //Get All dropdwon values by using forloop
    let dropdownOptions = page.getByLabel('Facility').locator('option').all();
    
    let dropdownValues = [];
    for(let ele of await dropdownOptions){
        dropdownValues.push(await ele.textContent());
    }   
    ;
    console.log(`${dropdownValues}`);


  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).uncheck();
  await page.getByRole('radio', { name: 'Medicaid' }).click();
  //to be selected
    await expect(page.getByRole('radio', { name: 'Medicaid' })).toBeChecked();
    //to not be selected
    await expect(page.getByRole('radio', { name: 'Medicaid' })).not.toBeChecked();

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

