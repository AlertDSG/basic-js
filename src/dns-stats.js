const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  const domainObj = {};

  if(domains.length === 0) {
    return domainObj;
  }
  const arr = domains
                .map(str => str.split('.').map(item => '.' + item)
                .reverse());

  for(let i = 0; i < arr.length; i++ ) { 
    let str = '';
    for(let j = 0; j < arr[i].length; j++ ) { 
      str = str + arr[i][j];
      if(domainObj[str]) {
        domainObj[str] += 1;
      } else {
        domainObj[str] = 1;
      }          
    }
  }

return domainObj;

}

module.exports = {
  getDNSStats
};
