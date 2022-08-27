'use strict';
/**
 * 
 * @param {string} str a char or string that to be repeated
 * @param {number} length number of times to be repeated
 * @returns {string} repeated string
 * 
 */
export default function repeat(str, length) {
  let repeatedStr = '';
  for (let i = 0; i < length; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
