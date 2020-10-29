const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
        this.alphabeet = [...
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ];
    }
    rev(str) {
        if (this.mode) return str;
        else return str.split('').reverse().join('');
    }
    encrypt(message, key) {
        let count = 0;
        key = key.toUpperCase().split('');
        return this.rev(message.toUpperCase().split('').reduce((res, item, index) => {
            if (this.alphabeet.indexOf(item) == -1) {
                res += item;
            } else {
                let x = this.alphabeet.indexOf(item) + this.alphabeet.indexOf(key[count]);
                count = count + 1 > key.length - 1 ? 0 : count + 1;
                res += (this.alphabeet[x > 25 ? x - 26 : x]);
            }
            return res;
        }, ''));
    }
    decrypt(message, key) {
        let count = 0;
        key = key.toUpperCase().split('');
        return this.rev(message.toUpperCase().split('').reduce((res, item, index) => {
            if (this.alphabeet.indexOf(item) == -1) {
                res += item;
            } else {
                let x = this.alphabeet.indexOf(item) - this.alphabeet.indexOf(key[count]);
                count = count + 1 > key.length - 1 ? 0 : count + 1;
                res += (this.alphabeet[x < 0 ? x + 26 : x]);
            }
            return res;
        }, ''));
    }
}

module.exports = VigenereCipheringMachine;