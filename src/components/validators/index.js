let validators = {
  required: {
    validate: (value) => value && value.trim() !== '',
    message: 'This field is required'
  } 
};

function validateFunction(fn, value) {
  let result = {};
  let validator = validators[fn];
  return {
    isValid: validator.validate(value),
    message: validator.message
  };

}

function validator(fieldsToValidate, data) {
  let errors = {};

  if (data.pristine) {
    return errors;
  }

  for (let [key, validateFunctions] of fieldsToValidate) {
    let validateField = validateFunctions
      .map(fn => validateFunction(fn, data[key]))
      .filter(fieldValidator => !fieldValidator.isValid)
      .map(fieldValidator => fieldValidator.message);
    
    errors[key] = [];

    if (validateField.length > 0) {
      errors[key] = validateField;
    }
  }
  return errors;
}

export default validator;