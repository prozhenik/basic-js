const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleNum = Number.parseFloat(sampleActivity);
  if(typeof sampleActivity !== 'string' || isNaN(sampleNum) || sampleNum <= 0 || sampleNum > MODERN_ACTIVITY) {
    return false;
  };
  const A0A = MODERN_ACTIVITY / sampleNum;
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  const t = Math.log(A0A) / k;
  return Math.ceil(t);
};