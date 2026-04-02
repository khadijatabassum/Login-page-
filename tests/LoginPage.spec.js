import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login';
//import { highlight } from '../utils/highlight'; // If you have highlight utility

test('Login Test - Using login() function', async ({ page }) => {


  // 🔥 Smooth Blink Highlight Function (Purple & Blue)

async function highlight(page, selector) {
  const element = page.locator(selector);
  await element.waitFor();

  await element.evaluate(async (el) => {
    const originalStyle = el.getAttribute("style") || "";

    for (let i = 0; i < 3; i++) {
      el.style.border = "3px solid purple";
      el.style.transition = "all 0.2s ease-in-out";
      await new Promise(r => setTimeout(r, 100));

      el.style.border = "3px solid yellow";
      await new Promise(r => setTimeout(r, 100));
    }

    el.setAttribute("style", originalStyle);
  });
}

  // Create instance of LoginPage class
  const Login = new LoginPage(page);

  // Step 1: Open login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Step 2: Use the login() function instead of manual steps
  await Login.login('tomsmith', 'SuperSecretPassword!');

  // Step 3: Verify login success
  await expect(page.locator('//h2[normalize-space()="Secure Area"]')).toBeVisible();

  // Optional: Highlight element for demo purposes
  await highlight(page, '//h2[normalize-space()="Secure Area"]');

  // Pause to inspect test in headed mode
  await page.pause();

  // Close page (optional, Playwright usually handles closing)
  await page.close();
//npx playwright test LoginPage.spec.js --project=firefox --headed 
//npx playwright test --ui });
});