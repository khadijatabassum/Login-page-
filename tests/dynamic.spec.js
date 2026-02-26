const{test,expect} = require('@playwright/test');
const { ADDRGETNETWORKPARAMS } = require('node:dns');

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
      await new Promise(r => setTimeout(r, 100));

      el.style.border = "3px solid yellow";
      await new Promise(r => setTimeout(r, 100));
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

await highlight(page, ".headcolor")
await expect(page.locator(".headcolor")).toContainText('Account Created Successfully')

await highlight(page, '[routerlink="/auth"]')
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

//Show result
 await highlight(page, '//div[@id="res"]')
  await page.locator('//div[@id="res"]')

//View the product image
 
await highlight(page,'//img[@class="card-img-top"]')
await page.locator('//img[@class="card-img-top"]')

//Add product to cart
  await highlight(page,'//div[@class="container"]//div[1]//div[1]//div[1]//button[2]')
  await page.locator('//div[@class="container"]//div[1]//div[1]//div[1]//button[2]').click()
//View product 
  await highlight(page, '//div[@class="container"]//div[1]//div[1]//div[1]//button[1]') 
  await page.locator('//div[@class="container"]//div[1]//div[1]//div[1]//button[1]').click()
  


//Viwed product details
//view image 

  await highlight(page, '//img[@class="img-fluid"]')
  await page.locator('//img[@class="img-fluid"]')
//Product heading
  await highlight(page,'//h2[normalize-space()="ADIDAS ORIGINAL"]' )
  await expect(page.locator('//h2[normalize-space()="ADIDAS ORIGINAL"]')).toHaveText('ADIDAS ORIGINAL')

 //Product  Price
 await highlight(page, '//h3[normalize-space()="$ 11500"]')
 await expect(page.locator('//h3[normalize-space()="$ 11500"]')).toHaveText('$ 11500')

 // Add to cart button
 await highlight(page,'//button[normalize-space()="Add to Cart"]')
 await page.locator('//button[normalize-space()="Add to Cart"]').click()

 //Product details

 await highlight(page, '//h6[normalize-space()="product details"]')
  await expect(page.locator('//h6[normalize-space()="product details"]')).toHaveText('product details')
  //Apple phone

  await highlight(page, '//p[normalize-space()="Apple phone"]')
   await expect(page.locator('//p[normalize-space()="Apple phone"]')).toHaveText('Apple phone')

   //share it
    await highlight(page, '//h6[normalize-space()="Share It"]')
    await expect(page.locator('//h6[normalize-space()="Share It"]')).toHaveText('Share It')

       //Click on social media icons
await highlight(page, '//i[@class="fa fa-facebook"]')
await page.locator('//i[@class="fa fa-facebook"]')

await highlight(page, '//i[@class="fa fa-google-plus"]')
await page.locator('//i[@class="fa fa-google-plus"]')


await highlight(page, '//i[@class="fa fa-twitter"]')
await page.locator('//i[@class="fa fa-twitter"]')

await highlight(page, '//i[@class="fa fa-instagram"]')
await page.locator('//i[@class="fa fa-instagram"]')

await highlight(page, '//i[@class="fa fa-rss"]')
await page.locator('//i[@class="fa fa-rss"]')

 // click on the continue shopping 
  await highlight(page, '//a[normalize-space()="Continue Shopping"]')
  await page.locator('//a[normalize-space()="Continue Shopping"]').click()

  //Click on the cart button
   await highlight(page, '//button[@routerlink="/dashboard/cart"]')
    await page.locator('//button[@routerlink="/dashboard/cart"]').click()

    await highlight(page,'//h1[normalize-space()="My Cart"]')
    await expect(page.locator('//h1[normalize-space()="My Cart"]')).toHaveText('My Cart')

    await highlight(page, '//img[@class="itemImg"]')
    await page.locator('//img[@class="itemImg"]')

    await highlight(page, '//p[normalize-space()="MRP $ 11500"]')
    await expect(page.locator('//p[normalize-space()="MRP $ 11500"]')).toHaveText(' MRP $ 11500')

    await highlight(page, '//p[@class="stockStatus"]')
    await expect(page.locator('//p[@class="stockStatus"]')).toHaveText(' In Stock')

    //subtotal
    await highlight(page,'//span[normalize-space()="Subtotal"]')
    await expect(page.locator('//span[normalize-space()="Subtotal"]')).toHaveText('Subtotal')

    await highlight(page,'//li[1]//span[2]')
    await expect(page.locator('//li[1]//span[2]')).toHaveText('$11500')

    await highlight(page,'//span[normalize-space()="Total"]')
    await expect(page.locator('//span[normalize-space()="Total"]')).toHaveText('Total')


    await highlight(page, '//button[normalize-space()="Buy Now"]')
    await page.locator('//button[normalize-space()="Buy Now"]').click()

    //Payment the Product

    //Selected product details

  await highlight(page, '//img[@class="iphone"]')
  await page.locator('//img[@class="iphone"]')

  //item title
  await highlight(page,'//div[@class="item__title"]')
  await page.locator('//div[@class="item__title"]')
// item price
  await highlight(page,'//div[@class="item__price"]')
  await page.locator('//div[@class="item__price"]')

  //item quentity

    await highlight(page,'//div[@class="item__quantity"]')
  await page.locator('//div[@class="item__quantity"]')

  //item description
  await highlight(page,'//li[normalize-space()="Apple phone"]')
  await page.locator('//li[normalize-space()="Apple phone"]')

  //Credit card tab

 await highlight(page, '//div[@class="payment__type payment__type--cc active"]')
 await page.locator('//div[@class="payment__type payment__type--cc active"]')

//Personal info



await highlight(page,'//input[@value="4542 9931 9292 2293"]')
await page.locator('//input[@value="4542 9931 9292 2293"]').fill('4111111111111111')

//Expiry date


await highlight(page, '//body//app-root//select[1]')
await page.selectOption('//body//app-root//select[1]', '03')

// Month
await highlight(page, '//body//app-root//select[2]')
await page.selectOption('//body//app-root//select[2]', '20')
//CVV
 await highlight(page, '//div[@class="payment__cc"]//div[2]//input[1]')
  await page.locator('//div[@class="payment__cc"]//div[2]//input[1]').fill('123')
  //Name on Card
  await highlight(page,'//div[@class="payment__info"]//div[3]//div[1]//input[1]')
  await page.locator('//div[@class="payment__info"]//div[3]//div[1]//input[1]').fill('123')

  
  //Shipping Information
await highlight(page,'//input[@class="input txt text-validated ng-untouched ng-pristine ng-valid"]')
await page.locator('//input[@class="input txt text-validated ng-untouched ng-pristine ng-valid"]').fill( username)

/*await highlight(page, '//input[@placeholder="Select Country"]')
await page.locator('//input[@placeholder="Select Country"]').fill("Afghanistan" )
await page.keyboard.press('Enter');
*/
// Click to open dropdown
await page.locator('//input[@placeholder="Select Country"]').click();

// Wait for options to appear
await page.waitForSelector('text=Afghanistan');

// Click exact option
await page.locator('text=Afghanistan').click();

await highlight(page, '//a[normalize-space()="Place Order"]')
await page.locator('//a[normalize-space()="Place Order"]').click()


//For chcek playwright code at the console
await page.pause()
await page.close();



//npx playwright test dynamic.spec.js --project=firefox --headed


})

