const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  backyard.forEach(function(item){
    for(let i = 0; i < item.length; i++) {
      item[i] === "^^" && count ++;
    }
    
  });
  return count;
};
