import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const commands = {
    '--discard-next': (result, arr, index) => {
      return {
        result: result,
        i: index + 1
      };
    },
    '--discard-prev': (result, arr, index) => {
      if (arr[index - 2] !== '--discard-next') {
        result.pop();
      }

      return {
        result: result,
        i: index
      };
    },
    '--double-next': (result, arr, index) => {
      if (index < arr.length - 1) {
        result.push(arr[index + 1]);
      }
      return {
        result: result,
        i: index
      };
    },
    '--double-prev': (result, arr, index) => {
      if (index >= 1 && arr[index - 2] !== '--discard-next') {
        result.push(arr[index - 1]);
      }

      return {
        result: result,
        i: index
      };
    },
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (commands.hasOwnProperty(arr[i])) {
      ({ result, i } = commands[arr[i]](result, arr, i));
    }
    else {
      result.push(arr[i]);
    }
  }
  return result;
}
