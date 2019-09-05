
import { checkSpecialCharsAndEmpty } from './check-special-chars-and-empty';
import { customCoverages } from './custom-transform';

const separatorOrLineBreak = (length, elementIdx, separator) => (
  length - 1 === elementIdx ? '\n' : separator
);

const escapeDoubleQuotesInsideElement = (element) => {
  const thisElement = element.replace(/"/g, '""');

  return thisElement;
};

const appendElement = (element, lineLength, elementIdx, separator) => {
  let thisElement = customCoverages(element);

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
