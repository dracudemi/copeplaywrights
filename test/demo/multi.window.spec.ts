import { test, expect } from '@playwright/test';

test.describe('Multiple Windows Test', () => {
  test('Handle multiple windows and navigate between them', async ({ browser }) => {
    // Create a new context and page
    const context = await browser.newContext();
    const parentPage = await context.newPage();

    // Navigate to the-internet.herokuapp.com
    await parentPage.goto('https://the-internet.herokuapp.com/');
    console.log('✓ Navigated to https://the-internet.herokuapp.com/');

    // Click on "Multiple Windows" link
    await parentPage.click('a[href="/windows"]');
    console.log('✓ Clicked on "Multiple Windows" link');

    // Wait for the new window to open
    const [newWindow] = await Promise.all([
      context.waitForEvent('page'),
    ]);
    console.log('✓ New window opened');

    // Assert the header text on the new window
    const newWindowHeader = await newWindow.locator('h1').textContent();
    console.log(`Header text in new window: ${newWindowHeader}`);
    expect(newWindowHeader).toContain('Opening a new window');
    console.log('✓ Asserted header text in new window');

    // Click the link on the new window
    await newWindow.click('a');
    console.log('✓ Clicked on link in new window');

    // Wait for another window to open
    const [thirdWindow] = await Promise.all([
      context.waitForEvent('page'),
    ]);
    console.log('✓ Third window opened');

    // Assert the header text in the third window
    const thirdWindowHeader = await thirdWindow.locator('h1').textContent();
    console.log(`Header text in third window: ${thirdWindowHeader}`);
    expect(thirdWindowHeader).toBeTruthy();
    console.log('✓ Asserted header text in third window');

    // Come back to parent window
    await parentPage.bringToFront();
    console.log('✓ Returned to parent window');

    // Verify we're back on the parent page
    const parentPageTitle = await parentPage.title();
    expect(parentPageTitle).toContain('The Internet');
    console.log('✓ Verified parent window is active');

    // Close all windows
    await newWindow.close();
    await thirdWindow.close();
    await parentPage.close();
    await context.close();
  });
});