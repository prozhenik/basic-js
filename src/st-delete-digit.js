import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digitStr = String(n);
  const arr = [];
  for (let i = 0; i < digitStr.length; i++) {
    let tmp = [...digitStr];
    tmp.splice(i, 1);
    arr.push(Number(tmp.join('')));
  }
  return arr.sort((a, b) => b - a)[0];
}
