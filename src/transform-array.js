const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error ();
  }
  let transformedArr = [];
  debugger;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '--discard-next') {
      if(i === arr.length-1) {
        continue;
      };
      transformedArr.push(null);
      i = i + 1;
      continue;
    } else if(arr[i] === '--discard-prev') {
      if(i === 0) {
        continue;
      }
      transformedArr.pop();
      continue;
    } else if(arr[i] === '--double-next') {
      if(i === arr.length-1) {
        continue;
      }
      transformedArr.push(arr[i + 1]);
      continue;
    } else if(arr[i] === '--double-prev') {
      if(i === 0) {
        continue;
      }
      transformedArr.push(transformedArr[transformedArr.length - 1]);
      continue;
    }
    transformedArr.push(arr[i]);
  }
  function isNull(item) {
    return item !==null;
  }
  return transformedArr.filter(isNull);
};
