import { test, expect } from '@playwright/test';

// Import the class
import { LoginPage } from '../Pages/Login';

// Highlight function (Purple & Blue)
async function highlight(page, selector) {
  const element = page.locator(selector);
  await element.waitFor();

  await element.evaluate(async (el) => {
    const originalStyle = el.getAttribute("style") || "";

    for (let i = 0; i < 3; i++) {
      el.style.border = "3px solid purple";
      el.style.transition = "all 0.2s ease-in-out";
      await new Promise(r => setTimeout(r, 100));

      el.style.border = "3px solid blue";
      await new Promise(r => setTimeout(r, 100));
    }

    el.setAttribute("style", originalStyle);
  });
}

test('Login Test', async ({ page }) => {

  // Create instance of class
  const Login = new LoginPage(page);

  // Open URL
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter Username
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

  // Enter Password
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  



  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Highlight Secure Area
  await highlight(page, '//h2[normalize-space()="Secure Area"]');

  // Validate element visible
  await expect(page.locator('//h2[normalize-space()="Secure Area"]')).toBeVisible();

  // Pause for debugging
  await page.pause();

  // Close browser
  await page.close();

  //npx playwright test LoginPage.spec.js --project=firefox --headed
   //npx playwright test --ui

})
