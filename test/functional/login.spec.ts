import { test, expect } from '@playwright/test';


test.describe( 'Login functionality' ,()=>{

    test.beforeEach('Go to login Page',async({page}) =>{
  await page.goto('https://katalon-demo-cura.herokuapp.com/#appointment');
  await expect(page.locator('h1')).toContainText('CURA Healthcare Service');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.getByText('Please login to make')).toBeVisible();

    })

test('Login Positive flow', async ({ page }) => {
    
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');
  //await page.locator('#menu-toggle').click();
  //await page.getByRole('link', { name: 'Logout' }).click();
});

test('Login Negative flow', async ({ page }) => {

  await page.getByLabel('Username').fill('Abcgdshdfsj');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('fdhsgfshdf');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('Login failed! Please ensure the username and password are valid.');

});

});
