const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {};
  obj.turns = 2 ** disksNumber -1;
  obj.seconds = Math.floor(obj.turns * (3600 / turnsSpeed));
 return obj;
}
calculateHanoi(38, 4594), { turns: 274877906943, seconds: 215402800390 }
module.exports = {
  calculateHanoi
};
