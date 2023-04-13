const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if(date === undefined) {
    try {
          throw new Error('Unable to determine the time of year!');
        } catch(e) {
          return e.message;
        }
  } else if(Object.getOwnPropertyNames(date).length > 0 || typeof date === 'number' ) {
      throw new Error("Invalid date!"); 
  }

  const month = date.getMonth();
  
  let season;
  if(month < 2 || month === 11) {
    season = 'winter';
  } else if(month < 5) {
    season = 'spring';
  } else if(month < 8) {
    season = 'summer';
  } else {
    season = 'autumn';
  }

  return season;

}

module.exports = {
  getSeason
};