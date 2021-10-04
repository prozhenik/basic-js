import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let max = depth;
    for (let el of arr) {
      if (Array.isArray(el)) {
        let current = this.calculateDepth(el, depth + 1);
        max = current > max ? current : max;
      }
    }
    return max;
  }
}
