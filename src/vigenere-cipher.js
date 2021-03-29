const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification) {
  this.modification = modification;
}

encrypt(str, sKey) {
  if(str === undefined || sKey === undefined) {
    throw new Error;
  } else {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str.toUpperCase();
    sKey = sKey.toUpperCase();
    let result = [];
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        result.push(alphabet[( alphabet.indexOf(str[i]) + alphabet.indexOf(sKey[j % sKey.length]) ) % alphabet.length]);
        j += 1;
      } else {
        result.push(str[i]);
      }
    }
    return this.modification !== false ? result.join('') : result.reverse().join('');
  }
}

decrypt(str, sKey) {
  if(str === undefined || sKey === undefined) {
    throw new Error;
  } else {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str.toUpperCase();
    sKey = sKey.toUpperCase();
    let result = [];
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        result.push(alphabet[(26 + alphabet.indexOf(str[i]) - alphabet.indexOf(sKey[j % sKey.length]) ) % alphabet.length]);
        j += 1;
      } else {
        result.push(str[i]);
      }
    }
    return this.modification !== false ? result.join('') : result.reverse().join('')
  }
}
};

module.exports = VigenereCipheringMachine;
