const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    let valueNew = value;
    if(value === undefined) {
      valueNew = ``;
    } else if(typeof value !== 'string') {
      valueNew = String(value);
    }
    this.value.push(`( ${valueNew} )`);
    return this;
  },
  removeLink(position) {
    if(position <= 0 || !Number.isInteger(position)|| this.value.length < position || typeof position === 'string' ) {
        this.value = []
        throw new Error("You can't remove incorrect link!");
    } else {
      this.value.splice(position -1, 1);
      return this;
    }  
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    const res = [...this.value];
    this.value = [];
    return res.join('~~');
  }
};

module.exports = {
  chainMaker
};
