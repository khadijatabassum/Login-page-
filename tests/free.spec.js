const{test, expect}= require('@playwright/test')

test('verify the pass select page', async({page}) =>{

    await page.goto('https://gitexasiadev.eventoclients.com/')

    //Fetch tile
const pageTitle= await page.title();
console.log('Page title is:',pageTitle);
await expect(page).toHaveTitle('GITEX AI ASIA | Registration | 9–10 April 2026 | Singapore ')



//select the free visitor pass
const selectPass= page.locator('//div[@class="passInner h-100 d-flex flex-column student_pass"]//a[@class="btn btn_solid2 text-uppercase d-flex align-items-center justify-content-center mt-auto"][normalize-space()="Get Your Pass"]')
await selectPass.click()

// Fill the form

await page.fill('//input[@placeholder="First Name"]','khadija') //Fill first name
 await page.fill('//input[@placeholder="Last Name"]','Tabassum')//Fill last name
 await page.fill('//input[@placeholder="Email"]','kth@yopmail.com')// give email
 await page.fill('//input[@placeholder="Confirm Email"]','kth@yopmail.com') //confirm email
 await page.fill('//input[@placeholder="Job Title"]', 'HR')//Enter job title

//For chcek playwright code at the console
await page.pause()
await page.close();



//npx playwright test free.spec.js --project=firefox --headed

})
