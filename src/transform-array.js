const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArray = [...arr];
  const points = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];

  for(let i = 0; i < arr.length; i++) {
    if( transformedArray[i - 1] && transformedArray[i] === '--double-prev' ) {
      transformedArray[i] = transformedArray[i - 1]
    } else if(transformedArray[i + 1] && transformedArray[i] === '--double-next' ) {
      transformedArray[i] = transformedArray[i + 1]
    } else if(transformedArray[i - 1] && transformedArray[i] === '--discard-prev' ) {
      transformedArray.splice(i - 1, 1);
    } else if(transformedArray[i + 1] && transformedArray[i] === '--discard-next' ) {
      transformedArray.splice(i + 1, 1);
    }
  }
  
  return transformedArray.filter(el => !points.includes(el))
}

module.exports = {
  transform
};
