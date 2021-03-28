const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season;
  if (date === undefined) return 'Unable to determine the time of year!'
  if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN')
  else {
    let month = date.getMonth()

    if (date.getFullYear() < 1970) {date.setFullYear(1971)}
    if ((month >= 0 && month <= 1) || (month == 11)) season = 'winter';
    else {
      if (month >= 2 && month <= 4) season = 'spring';
      else {
        if (month >= 5 && month <= 7) season = 'summer';
        else {
          if (month >= 8 && month <= 10) season = 'autumn';
          else {
  
          }
        }
      }
    }
  }
  return season;
};
