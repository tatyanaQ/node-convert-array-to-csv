export const checkStringFromDigits = (value) => {
  const onlyDigitsPattern = /^[0-9]+$/g;
  return typeof value === 'string' ? value.match(onlyDigitsPattern) : null;
};
