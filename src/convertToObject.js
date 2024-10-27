'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || sourceString.trim() === '') {
    return {};
  }

  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':');
      const value = valueParts.join(':').trim();

      if (property && value) {
        acc[property.trim()] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
