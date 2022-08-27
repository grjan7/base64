'use strict';

import repeat from "./util/repeat.js";
import bin2Dec from "./util/bin2Dec.js";
import str2Bin from "./util/str2Bin.js";
import dec2Bin from "./util/dec2Bin.js";

/**
 * Type Base64
 * 
 */
export default class Base64 {

  static BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  /**
   * 
   * @param {string} plainStr a string to be encoded to base64
   * @returns {string} base64-encoded string
   * 
   */

  static encode(plainStr) {
    let str = plainStr;
    let paddingLength = (str.length % 3) == 0 ? 0 : 3 - (str.length % 3);
    let paddedBin = str2Bin(str) + repeat("0", paddingLength * 8);
    let base64Str = "";

    for (let i = 0; i < paddedBin.length; i += 6) {
      base64Str += Base64.BASE64[bin2Dec(paddedBin.slice(i, i + 6))];
    }
    return base64Str.slice(0, base64Str.length - paddingLength) + repeat("=", paddingLength);
  }

  /**
   * 
   * @param {string} base64Str base64-encoded string
   * @returns {string} decoded string from base64-encoded string
   * 
   */

  static decode(base64Str) {
    let eqIndex = base64Str.indexOf("=");
    let mainStr = eqIndex != -1 ? base64Str.slice(0, eqIndex) : base64Str;
    let paddingLength = base64Str.length - mainStr.length;
    let binStr = "";
    let asciiStr = "";

    for (let i = 0; i < mainStr.length; i++) {
      let currChar = mainStr[i];
      binStr += dec2Bin(Base64.BASE64.indexOf(currChar), 6);
    }

    binStr += repeat("0", paddingLength * 6);

    for (let j = 0; j < binStr.length; j += 8) {
      asciiStr += String.fromCharCode(bin2Dec(binStr.slice(j, j + 8)));
    }
    return asciiStr.slice(0, asciiStr.length - paddingLength);
  }
}


