import { test, expect } from '@playwright/test';

test.describe('Inventory Feature', () => {
    test.beforeEach('Login With valid credentials', async ({ page }) => {
       await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
 
    }); 
    test('Should confirm all prices are less than zero Inventory Page', { tag: '@smoke' }, async ({ page }) => {
        const prices = page.locator('.inventory_item_price');
        const count = await prices.count();
        for(let i=0; i<count; i++){
            let priceText = await prices.nth(i).textContent();
            if (priceText) {
  const price = parseFloat(priceText);
  // use price here
  const priceValue = parseFloat(priceText.replace('$', ''));
            expect(priceValue).toBeLessThan(100);
            console.log(priceValue);
} else {
  // handle null case, e.g., throw or skip
}
}   
            });

    }); 

    