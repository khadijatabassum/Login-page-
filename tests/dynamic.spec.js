const{test,expect} = require('@playwright/test')

test('Verify the user register', async({page}) =>{

    // Generate dynamic email
const username = `user_${Date.now()}@yopmail.com`;
const password = 'Ktcv1515@';


// 🔥 Smooth Blink Highlight Function
async function highlight(page, selector) {
  const element = page.locator(selector);
  await element.waitFor();

  await element.evaluate(async (el) => {
    const originalStyle = el.getAttribute("style") || "";

    for (let i = 0; i < 3; i++) {
      el.style.border = "3px solid red";
      el.style.transition = "all 0.2s ease-in-out";
      await new Promise(r => setTimeout(r, 200));

      el.style.border = "3px solid yellow";
      await new Promise(r => setTimeout(r, 200));
    }

    el.setAttribute("style", originalStyle);
  });
}

await page.goto('https://rahulshettyacademy.com/client/#/auth/register')
// Check page title directly

await expect(page).toHaveTitle("Let's Shop");




//Chech the firt name

// First Name
await highlight(page, '#firstName');
await page.fill('#firstName', 'Khadija');

// Last Name
await highlight(page, '#lastName');
await page.fill('#lastName', 'Tabassum');

// Email
await highlight(page, '#userEmail');
await page.fill('#userEmail', username);

// Phone
await highlight(page, '#userMobile');
await page.fill('#userMobile', '3015034590');

// Occupation
await highlight(page, 'select[formcontrolname="occupation"]');
await page.selectOption('select[formcontrolname="occupation"]', 'Engineer');

// Gender
await highlight(page, '[value="Female"]');
await page.check('[value="Female"]');

// Password
await highlight(page, '#userPassword');
await page.fill('#userPassword', password);

// Confirm Password
await highlight(page, '#confirmPassword');
await page.fill('#confirmPassword', password);

// Checkbox
await highlight(page, '[type="checkbox"]');
await page.check('[type="checkbox"]');

// Register
await highlight(page, '[value="Register"]');
await page.click('[value="Register"]');

await expect(page.locator(".headcolor")).toContainText('Account Created Successfully')
await page.locator('[routerlink="/auth"]').click()

// 🔥 LOGIN USING SAME RUNTIME CREDENTIALS WITH HIGHLIGHT

// Highlight + Fill Email
await highlight(page, '#userEmail');
await page.fill('#userEmail', username);

// Highlight + Fill Password
await highlight(page, '#userPassword');
await page.fill('#userPassword', password);

// Highlight + Click Login Button
await highlight(page, '#login');
await page.click('#login');


//Filter the products
await highlight(page, "//section[@id='sidebar']//input[@placeholder='search']")

await page.locator("//section[@id='sidebar']//input[@placeholder='search']")
  .fill('ADIDAS ORIGINAL');

await page.keyboard.press('Enter');

  await highlight(page,'//button[normalize-space()="Add To Cart"]')
  await page.locator('//button[normalize-space()="Add To Cart"]').click()


//For chcek playwright code at the console
await page.pause()
await page.close();



//npx playwright test dynamic.spec.js --project=firefox --headed



})

/*

/*
  // Better highlight function
async function highlight(page, selector) {
  const element = page.locator(selector);
  await element.waitFor(); // wait until element is visible

  await element.evaluate(el => {
    el.style.border = "3px solid red";
    el.style.backgroundColor = "#99ffa0";
  });
}
  
await page.locator('//input[@id="firstName"]').fill("khadija")

// Check last name
await page.locator('//input[@id="lastName"]').fill("Tabassum")
//Check the email
await page.locator('//input[@id="userEmail"]').fill('k@yopmail.com')
//Chcek the Phone number
await page.locator('//input[@id="userMobile"]').fill('3015034590')

// Select Occupation
await page.locator('select[formcontrolname="occupation"]').selectOption("Engineer")
//Select Gender
await page.locator('[value="Female"]').check()
    
//Enter PAssword
await page.locator('//input[@id="userPassword"]').fill('Ktcv1515@')
await page.locator('//input[@id="confirmPassword"]').fill('Ktcv1515@')

//Accept terms
await page.locator('[type="checkbox"]').check()
//Click register

await page.locator('[value="Register"]').click()
//await expect(page.locator(".headcolor")).toContainText('Account Created Successfully')


*/