import { faker } from "@faker-js/faker";

describe("Demo QA Text Box", () => {
  beforeEach(async () => {
    await browser.url("https://demoqa.com/text-box");
  });
  it.only("Fill out form & verify all info is printed on the screen", async () => {
    // we'll be asserting these values appear on the screen later in the test, so we need to store it in a local variable, rather than write them twice:
    const username = faker.internet.userName();
    const email = "testEmail123@gmail.com";
    const currentAdd = "1234 Main St";
    const permAdd = "1234 Main St";

    await $("#userName").setValue(username);
    await $("#userEmail").setValue(email);
    await $("#currentAddress").setValue(currentAdd);
    await $("#permanentAddress").setValue(permAdd);
    await $("#permanentAddress-label").scrollIntoView();
    await $("#submit").click();

    await expect($("#name")).toHaveText("Name:" + username);
    await expect($("#email")).toHaveText("Email:" + email);
    // 2 elements have the currentAddress ID, so we need to specify the element type we're looking for.
    // Go through finding the ID & then building the selector using ChroPath
    await expect($("p[id='currentAddress']")).toHaveText(
      `Current Address :${currentAdd}`
    );
    // 2 elements have the permanentAddress ID, so we need to specify the element type we're looking for.
    // Go through finding the ID & then building the selector using ChroPath
    // We use double dollar signs to capture all matching elements in an array, then we specify the 2nd item in the array
    await expect($$("#permanentAddress")[1]).toHaveText(
      `Permananet Address :${permAdd}`
    );
    // await browser.pause(20000);

    // Possible Bugs:
    // 1. Spacing between address & the values
    // 2. Incorrect 'Permananet' spelling
  });

  it("Check email field is highlighted when invalid email format is entered", async () => {
    await $("#userEmail").setValue("johnSmith");
    await $("#submit").scrollIntoView();
    await $("#submit").click();
    await browser.pause(3000);
    // Check if the email input has the `field-error` class. If it doesn't, throw an error with the specified error message
    await expect($("#userEmail")).toHaveElementClass("field-error", {
      message: "Class not found",
    });
  });
});
