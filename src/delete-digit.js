const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( number ) {
 let res;

 const arr = number.toString().split('');

  for(let i = 0; i < arr.length; i++) {
    const arrMutation = [...arr];

    if(!res) {
      arrMutation.splice(i, 1);
      res = +arrMutation.join('');
    } else {
      arrMutation.splice(i, 1);

      if(res < +arrMutation.join('')) {
        res = +arrMutation.join('');
      }
    }
  }

 return res;
}

module.exports = {
  deleteDigit
};
