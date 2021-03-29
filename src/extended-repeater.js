const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  debugger;
  let stringArray = [];
  if(typeof str !== 'string') {
    str = '' + str;
  }
  if(options.addition !== undefined && typeof options.addition !== 'string') {
    options.addition = '' + options.addition;
  }
  if(!options.repeatTimes || isNaN(options.repeatTimes)) {
    options.repeatTimes = 1;
  }
  for(let i = 0; i < options.repeatTimes; i++) {
    stringArray.push(str);
    if(!options.additionRepeatTimes || isNaN(options.additionRepeatTimes)) {
      options.additionRepeatTimes = 1;
    }
    for(let j = 0; j < options.additionRepeatTimes; j++) {
      options.addition && stringArray.push(options.addition);
      if(j !== options.additionRepeatTimes - 1) {
        options.additionSeparator ? stringArray.push(options.additionSeparator) : stringArray.push('|');
      }
    }
    if(i !== options.repeatTimes - 1) {
      options.separator ? stringArray.push(options.separator) : stringArray.push('+');
    }
  }
  return stringArray.join('');
};
  