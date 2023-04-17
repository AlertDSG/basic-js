const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const cat = '^^';
  let count = 0;

  count += counterForCats(matrix, cat)

  function counterForCats(arr, animal) {
    let cicleCount = 0;
    for(let i = 0; i < arr.length; i++)
      if(Array.isArray(arr[i])) {
        cicleCount += counterForCats(arr[i], animal);
      } else {
      
        if(arr[i] === animal){
        ++cicleCount;
        } 
      }
      return cicleCount;
  }

  return count;
}

module.exports = {
  countCats
};