const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArr = [];
    if (Array.isArray(arr)) {
        if (arr.length !== 0) {
            for (let index = 0; index < arr.length; index++) {
                switch (arr[index]) {
                    case '--discard-next':
                        if (arr[index + 2] == '--double-prev' || arr[index + 2] == '--discard-prev') {
                            index += 2;
                        } else index++;
                        break;
                    case '--discard-prev':
                        if (index > 0) newArr.pop();
                        break;
                    case '--double-next':
                        if (index < arr.length - 1) newArr.push(arr[index + 1]);
                        break;
                    case '--double-prev':
                        if (index > 0) newArr.push(arr[index - 1]);
                        break;
                    default:
                        newArr.push(arr[index]);
                        break
                }
            }
        } else return arr;
    } else throw 'THROWN';
    return newArr;
};