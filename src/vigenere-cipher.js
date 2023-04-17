const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isCrypt = true) {
    this.isCrypt = isCrypt !== false ? isCrypt : false;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'. split('');
  }

  helperCoder() {
    const numAlph = {};
    for(let i = 0; i < this.alphabet.length; i++ ) {
      numAlph[this.alphabet[i]] = i;
    }
    return numAlph;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let codeWord = [];

    let numAlph = this.helperCoder();
    let newMessage = message.toUpperCase().split('');
    const newKey = key.toUpperCase();
    const arrIndex= [];
    if(!newMessage.every(el => this.alphabet.includes(el))) {
      newMessage = newMessage.filter((el, i) => {
        if(!this.alphabet.includes(el)) {
          arrIndex.push(i);
        } else return el;
      });
    }

    for(let i = 0; i < newMessage.length; i++ ) {
      codeWord.push(this.alphabet[(numAlph[newMessage[i]] + numAlph[newKey[i % newKey.length]] + this.alphabet.length) % this.alphabet.length]);
    }

    arrIndex.forEach(el => {
      codeWord.splice(el, 0, message[el]);
    });

    return codeWord.join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let codeWord = [];
    let numAlph = this.helperCoder();
    let newMessage = message.toUpperCase().split('');
    const newKey = key.toUpperCase().split('');
    const arrIndex= [];

    if(!this.isCrypt) {
      if(!newMessage.every(el => this.alphabet.includes(el))) {
      
        newMessage = newMessage.filter((el, i) => {
          if(!this.alphabet.includes(el)) {
            arrIndex.push(i);
          } else return el;
        }).reverse();
      }
    } else {
      if(!newMessage.every(el => this.alphabet.includes(el))) {
      
        newMessage = newMessage.filter((el, i) => {
          if(!this.alphabet.includes(el)) {
            arrIndex.push(i);
          } else return el;
        });
      }
    }
    
    
    for(let i = 0; i < newMessage.length; i++ ) {
      codeWord.push(this.alphabet[(numAlph[newMessage[i]] - numAlph[newKey[i % newKey.length]] + this.alphabet.length) % this.alphabet.length]);
    }

    if(!this.isCrypt) {
      codeWord.reverse();
    }

    arrIndex.forEach(el => {
      codeWord.splice(el, 0, message[el]);
    });

    return codeWord.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};