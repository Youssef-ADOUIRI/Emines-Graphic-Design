const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddProjectInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  data.owner = !isEmpty(data.owner) ? data.owner : "";
  data.imgs = !isEmpty(data.owner) ? data.imgs : [];

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (Validator.isEmpty(data.owner)) {
    errors.owner = "The creator is not not given";
  }
  if (data.imgs.length !== 0) {
    for (let i = 0; i < data.imgs.length; i++) {
      //check id and path
      data.imgs[i].id = !isEmpty(data.imgs[i].id) ? data.imgs[i].id : "";
      data.imgs[i].path_url = !isEmpty(data.imgs[i].path_url)
        ? data.imgs[i].path_url
        : "";
      if (Validator.isEmpty(data.imgs[i].id.toString())) {
        errors.imgs = "The id of the " + i + " image is not defined ";
        break;
      }
      if (Validator.isEmpty(data.imgs[i].path_url)) {
        errors.imgs = "The path_url of the " + i + " image is not defined ";
        break;
      }
    }
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
