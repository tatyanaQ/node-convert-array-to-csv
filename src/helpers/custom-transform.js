const cover = (value) => {
  return `="${value}"`;
};

const coverStringFromDigits = (value) => {
  const onlyDigitsPattern = /^[0-9]+$/g;
  const isDigitString = typeof value === 'string' ?
    value.match(onlyDigitsPattern) : null;
  return isDigitString ? cover(value) : value;
};

const coverPhoneNumber = (value) => {
  const balarusPhoneNumberPattern = /^\+[0-9]{12}$/g;
  const isPhoneNumber = typeof value === 'string' ?
    value.match(balarusPhoneNumberPattern) : null;
  return isPhoneNumber ? cover(value) : value;
};

const customCoverages = (value) => {
  let coveredValue = value;
  coveredValue = coverStringFromDigits(coveredValue);
  coveredValue = coverPhoneNumber(coveredValue);
  return coveredValue;
};

export { customCoverages };