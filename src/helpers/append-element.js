
import { checkSpecialCharsAndEmpty } from './check-special-chars-and-empty';
import { checkStringFromDigits } from './check-string-from-digits';

const separatorOrLineBreak = (length, elementIdx, separator) => (
  length - 1 === elementIdx ? '\n' : separator
);

const escapeDoubleQuotesInsideElement = (element) => {
  const thisElement = element.replace(/"/g, '""');

  return thisElement;
};

const appendElement = (element, lineLength, elementIdx, separator) => {
  const isDigitString = checkStringFromDigits(element);

  let thisElement = element;

  if (isDigitString) {
    thisElement = `="${thisElement}"`;
  } 

  const includesSpecials = checkSpecialCharsAndEmpty(thisElement);  

  if (includesSpecials) {
    thisElement = escapeDoubleQuotesInsideElement(thisElement);
  }

  return (
    includesSpecials
      ? `"${thisElement}"${separatorOrLineBreak(lineLength, elementIdx, separator)}`
      : `${thisElement}${separatorOrLineBreak(lineLength, elementIdx, separator)}`
  );
};

export { appendElement };
