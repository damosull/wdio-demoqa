# How to install & run this project:

1. Install dependencies: `npm i` to install
2. Run all tests: `npx run wdio.conf.js`

# How to install & use NPM Packages (using @faker-js/faker as an example):

- We can use NPM packages to help with our tests. All available packages are found here - https://www.npmjs.com/
- One such package is @faker-js/faker. This package allows us to generate fake test data.
- Here is how you would install @faker-js/faker:
  - Via the command prompt, run this command in the root of your project: `npm i -D @faker-js/faker`. This will install the package as a dev dependency.
  - Import the package at the top of the file where it is needed: `import { faker } from "@faker-js/faker";`
  - Use it in your code: `faker.name.firstName()`. More examples for this package can be found here - https://fakerjs.dev/api/

# Page Object Model (POM):

- Create a page object file in your page-objects folder.
- Add getters to the page object file for the required UI elements.
- Import the page object at the top of your spec file: `import practiceFormPage from "../pageobjects/practice-form.page.js";`
- Use it in your code: `practiceFormPage.txtFirstName.setValue(...)`
