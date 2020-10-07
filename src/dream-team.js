const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    return Array.isArray(members) ? members.map(item => typeof item == 'string' ? item.trim()[0].toUpperCase() : false).sort().reduce((teamName, item) => teamName += item ? item : '', '') : false;
};