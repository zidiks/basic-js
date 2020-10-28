const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        for (let index = 0; index < arr.length; index++) {
            if (Array.isArray(arr[index])) {
                depth = this.calculateDepth(arr.flat(1)) + 1;
                break;
            }
        }
        return depth;
    }
};