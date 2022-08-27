'use strict';

import dec2Bin from "./dec2Bin.js";

/**
 * 
 * @param {string} str a string to be coverted to bits string
 * @returns {string} converts string to unsigned 8-bit string
 * 
 */
export default function str2Bin(str) {
  let binStr = "";
  for (let i = 0; i < str.length; i++) {
    binStr += dec2Bin(str.charCodeAt(i), 8);
  }
  return binStr;
}

