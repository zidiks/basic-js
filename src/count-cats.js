const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    return arr.reduce((sum, item) => sum += item.reduce((sum, item) => sum += item == '^^' ? 1 : 0, 0), 0);
};