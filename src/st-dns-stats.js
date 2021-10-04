import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const stats = {};
  for (let domain of domains) {
    let parts = domain.split('.').reverse();
    let str = '';
    for (let part of parts) {
      str = str + '.' + part;
      if (stats.hasOwnProperty(str)) {
        stats[str] = stats[str] + 1;
      } else {
        stats[str] = 1;
      }
    }
  }
  return stats;
}
