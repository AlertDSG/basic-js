const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let separator = options.separator ? options.separator : '+';
  let newStr = str + (options.addition + additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;

  if(options.addition === undefined) {
    return (str + separator).repeat(options.repeatTimes -1) + str;
  }

  if(typeof options.addition !== 'string' && typeof options.addition !== 'object') {
    let dependence;
    if(typeof str === 'number') {
      dependence = str
    } else {
      dependence = str.toString();
    }
    let newStr = dependence + (options.addition.toString() + additionSeparator.toString()).repeat(options.additionRepeatTimes - 1) + options.addition.toString();
    return (newStr + options.separator).repeat(options.repeatTimes - 1) + newStr;
  }

  return (newStr + separator).repeat(options.repeatTimes - 1) + newStr;

}

module.exports = {
  repeater
};
