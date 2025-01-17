import { appendElement } from '../helpers/append-element';

export const convertArrayOfArraysToCSV = (data, { header, separator }) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl, i) => {
      const thisHeaderEl = headerEl || (headerEl === 0 ? 0 : '');

      csv += appendElement(thisHeaderEl, header.length, i, separator);
    });
  }

  array.forEach((row) => {
    row.forEach((value, i) => {
      const thisValue = value || (value === 0 ? 0 : '');

      csv += appendElement(thisValue, row.length, i, separator);
    });
  });

  return csv;
};
