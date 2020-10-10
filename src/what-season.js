const CustomError = require("../extensions/custom-error");

const MONTHS = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
}

module.exports = function getSeason(date) {
    if (!date.toUTCString()) return 'THROWN';
    if (!date) return 'Unable to determine the time of year!';
    for (month in MONTHS) {
        if (MONTHS[month].includes(date.getMonth())) return month;
    }
};