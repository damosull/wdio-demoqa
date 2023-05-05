import practiceFormPage from "../pageobjects/practice-form.page.js";
import { faker } from "@faker-js/faker";

describe("Demo QA", () => {
  beforeEach(async () => {
    await browser.setWindowSize(1300, 1000);
    await browser.url("https://demoqa.com/automation-practice-form");
  });

  it("Print the page title in the console", async () => {
    console.log("Page Title: " + (await browser.getTitle()));
  });

  it("Fill out the form", async () => {
    await $("#firstName").setValue("John");
    await $("#lastName").setValue("Doe");
    await $("#userEmail").setValue("John.Doe@gmail.com");
    await $("label[for='gender-radio-1']").click();
    await $("#userNumber").setValue("0856523265");
    await $("#state").scrollIntoView(); // moving down the page (using this element so the remaining elements are all visible)
    await $("#dateOfBirthInput").click();
    const dateDropdown = $(".react-datepicker__month-select");
    await dateDropdown.selectByAttribute("value", "9");

    await $("#subjectsInput").setValue("math");
    await $("//div[text()='Maths']").click(); // XPath
    await $("label[for='hobbies-checkbox-1']").click();
    await $("label[for='hobbies-checkbox-2']").click();

    await $("#uploadPicture").setValue(
      "C:/Pers/webdriverio/demoqa/assets/wdio-logo.png"
    ); // this file has to exist

    await $("#currentAddress").setValue("123 Main Street");

    await $("//input[@id='react-select-3-input']").setValue("NCR");
    await $("//div[contains(@id,'react-select')]").click();
    await $("//input[@id='react-select-4-input']").setValue("Noida");
    await $("//div[contains(@id,'react-select')]").click();

    // TODO: Being covered by footer, asked SO:
    // await $("button[type='submit']").click();
    await browser.pause(3000);
  });

  it("Use Faker to generate fake data & fill out the form", async () => {
    // 1. Install the @faker-js/faker package (npm i -D) (https://www.npmjs.com/package/@faker-js/faker)
    // 2. Import @ the top of file where it's needed `import { faker } from "@faker-js/faker";`
    // 3. Use it `faker.name.firstName()`, etc. See more examples here - https://fakerjs.dev/api/
    await $("#firstName").setValue(faker.name.lastName());
    await browser.pause(3000);
  });

  it("Use Page Objects to specify elements", async () => {
    // 1. Create page object file in pageobjects folder
    // 2. Add getters to the page object file for the required elements
    // 3. Import the page object at the top of your spec file - `import practiceFormPage from "../pageobjects/practice-form.page.js";`
    // 4. Use the page object - `practiceFormPage.txtFirstName`
    practiceFormPage.txtFirstName.setValue(faker.name.lastName());
    await browser.pause(3000);
  });
});
