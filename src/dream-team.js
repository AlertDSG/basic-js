const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  if(Array.isArray(members) && members.length === 0) {
    try {
      throw new Error('Array is empty');
    } catch(e) {
      return e.message;
    }
  } else if(!Array.isArray(members)) {
    return false;
  } else return members.map( letter => {
    if(typeof letter !== 'string') {
      return undefined;
    } else return letter.trim()[0].toUpperCase();
  }).filter(e => typeof e === 'string' ).sort((a, b) => a > b ? 0 : -1).join('');
}

module.exports = {
  createDreamTeam
};
