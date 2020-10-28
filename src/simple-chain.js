const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    respThrow() {
        this.chain = [];
        throw 'THROWN';
    },
    addLink(value) {
        this.chain.push(`( ${value == null ? 'null' : value.toString()} )`);
        return this;
    },
    removeLink(position) {
        position--;
        if (!Number.isInteger(position)) this.respThrow();
        if (!this.chain[position]) this.respThrow();
        this.chain.splice(position, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let req = this.chain.slice();
        this.chain = [];
        return req.join('~~');
    }
};

module.exports = chainMaker;