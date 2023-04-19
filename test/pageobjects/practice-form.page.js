class practiceFormPage {
  get txtFirstName() {
    return $("#firstName");
  }

  get txtLastName() {
    return $("#lastName");
  }

  get rdoMaleLabel() {
    return $("label[for='gender-radio-1']");
  }
}

export default new practiceFormPage();
