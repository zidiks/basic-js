const CustomError = require("../extensions/custom-error");

const MONTHS = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
}

module.exports = function getSeason(date) {
    if (arguments[0] == undefined) return 'Unable to determine the time of year!';
    if (Object.getOwnPropertyNames(date).length > 0) throw 'THROWN';
    for (month in MONTHS) {
        if (MONTHS[month].includes(date.getMonth())) return month;
    }
};