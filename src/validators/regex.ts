export const emailPattern = () => {
  const emailPattern = {
    value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g,
    message: "Please enter a valid email address.",
  };

  return emailPattern;
};

export const phoneNumberPattern = () => {
  const phonePattern = {
    value: /^\+?(\d{1,3})?[-. ]?(\d{1,4})?[-. ]?(\d{1,4})[-. ]?(\d{1,9})$/,
    message: "Please enter a valid phone number.",
  };

  return phonePattern;
};

export const pricePattern = () => {
  const pattern = {
    value: /^(0|[1-9]\d*)(\.\d{1,2})?$/,
    message:
      "Please enter a valid number. No spaces, starting from 0, and up to two decimal places.",
  };

  return pattern;
};

export const timePattern = () => {
  const pattern = {
    value: /^([0-9]|[1-9][0-9]|[1-9][0-9][0-9]):([0-5][0-9])$/,
    message:
      "Please enter a valid time in the format 'mm:ss', with minutes up to three digits and seconds between 00 and 59.",
  };
  return pattern;
};
