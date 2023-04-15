const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let string = '';
  let count = 1;
  let index = 0;

while(index <= str.length) {
  if(str === '') {
    return '';
  }

  if(index === 0 && str[index + 1] !== str[index]) {
    
  }else if (index === 0 && str[index + 1] === str[index]) {
    
  }else if(str[index] === str[index -1]) {
    count++;
  }else if( str[index] !== str[index -1]) {
    if(count > 1) {
      string = string + count + str[index - 1];
      count = 1;
    } else {
      string += str[index - 1];
    }
    
  }
  index++;
}

  return string;
}

module.exports = {
  encodeLine
};
