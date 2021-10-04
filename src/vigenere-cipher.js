import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  const = {
    MACHINE_TYPE_DIRECT: 'direct',
    MACHINE_TYPE_REVERSE: 'reverse',
    DIRECTION_ENCRYPT: 'encrypt',
    DIRECTION_DECRYPT: 'decrypt',
    ALPHABET_LENGTH: 26,
    ALPHABET_FIRST_LETTER: 'A',
    ALPHABET_REGEXP: /[A-Z]/
  }

  constructor(machineType = true) {
    this.machineType = machineType ? this.const.MACHINE_TYPE_DIRECT : this.const.MACHINE_TYPE_REVERSE;
  }

  encrypt(message, key) {
    return this.process(message, key, this.const.DIRECTION_ENCRYPT);
  }
  decrypt(message, key) {
    return this.process(message, key, this.const.DIRECTION_DECRYPT);
  }

  process(message, key, direction) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const result = [];
    const regexp = new RegExp(this.const.ALPHABET_REGEXP);
    message = message.toUpperCase();
    key = key.toUpperCase();


    for (let i = 0, k = 0; i < message.length; i++) {
      if (!regexp.test(message[i])) {
        result.push(message[i]);
      } else {
        result.push(this.getChar()[direction](message[i], key[k % key.length]));
        k++;
      }
    }
    return this.machineType === this.const.MACHINE_TYPE_DIRECT ? result.join('') : result.reverse().join('');
  }

  getChar() {
    return {
      [this.const.DIRECTION_DECRYPT]: (messageChar, keyChar) =>
        String.fromCharCode(
          (
            messageChar.codePointAt(0) -
            this.const.ALPHABET_FIRST_LETTER.codePointAt(0) +
            (this.const.ALPHABET_LENGTH - (keyChar.codePointAt(0) - this.const.ALPHABET_FIRST_LETTER.codePointAt(0)))
          ) % this.const.ALPHABET_LENGTH + this.const.ALPHABET_FIRST_LETTER.codePointAt(0)
        )
      ,
      [this.const.DIRECTION_ENCRYPT]: (messageChar, keyChar) =>
        String.fromCharCode(
          (
            messageChar.codePointAt(0) -
            this.const.ALPHABET_FIRST_LETTER.codePointAt(0) +
            (keyChar.codePointAt(0) - this.const.ALPHABET_FIRST_LETTER.codePointAt(0))
          ) % this.const.ALPHABET_LENGTH + this.const.ALPHABET_FIRST_LETTER.codePointAt(0)
        )

    }
  }
}
