'use strict';

/**
 * 
 * @param {string} binStr a string of bits
 * @returns {number} equivalent decimal value
 *  
 */
export default function bin2Dec(binStr) {
  let decVal = 0;
  let j = 0;
  for (let i = binStr.length - 1; i >= 0; i--) {
    decVal += parseInt(binStr[i]) * (2 ** j);
    j++;
  }
  return decVal;
}

