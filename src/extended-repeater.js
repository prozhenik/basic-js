import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (options.hasOwnProperty('addition')) {
    if (options.hasOwnProperty('additionRepeatTimes')) {
      const repeatedAddition = Array(options.additionRepeatTimes).fill(String(options.addition));
      if (options.hasOwnProperty('additionSeparator')) {
        str += repeatedAddition.join(options.additionSeparator);
      } else {
        str += repeatedAddition.join('|');
      }
    } else {
      str += options.addition;
    }
  }

  if (options.hasOwnProperty('repeatTimes')) {
    const repeatedStr = Array(options.repeatTimes).fill(str);
    if (options.hasOwnProperty('separator')) {
      return repeatedStr.join(options.separator);
    } else {
      return repeatedStr.join('+');
    }
  }
  return str;
}
