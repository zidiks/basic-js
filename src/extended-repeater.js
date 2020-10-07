const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, o) {
    o.separator = o.separator ? o.separator : '+';
    o.repeatTimes = o.repeatTimes ? o.repeatTimes : 1;
    o.additionRepeatTimes = o.additionRepeatTimes ? o.additionRepeatTimes : 1;
    let response = '';
    for (let index = 1; index <= o.repeatTimes; index++) {
        const separator = o.separator && index < o.repeatTimes ? o.separator : '';
        const addition = typeof o.addition !== 'undefined' ? prepareAddition(o.addition, o.additionRepeatTimes, o.additionSeparator) : '';
        response += str + addition + separator;
    }
    return response;
}

function prepareAddition(addition, additionRepeatTimes, additionSeparator) {
    let response = '';
    for (let index = 1; index <= additionRepeatTimes; index++) {
        const separator = additionSeparator && index < additionRepeatTimes ? additionSeparator : '';
        response += addition + separator;
    }
    return response;
}