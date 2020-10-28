const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let discardNext = false;
    return arr.reduce((newarr, item, index, array) => {
        switch (item) {
            case '--discard-next':
                if (array[index + 1]) discardNext = true;
                newarr.push('dell');
                return newarr;
            case '--discard-prev':
                if (array[index - 1]) newarr[newarr.length - 2] = 'dell';
                newarr.push('dell');
                return newarr;
            case '--double-next':
                if (array[index + 1]) newarr.push(array[index + 1]);
                return newarr;
            case '--double-prev':
                if (array[index - 1]) newarr.push(newarr[newarr.length - 2]);
                return newarr;
            default:
                if (discardNext) {
                    discardNext = false;
                    newarr.push('dell');
                } else newarr.push(item);
                return newarr;
        }
    }, []).filter(function(x) {
        return x !== 'dell';
    });
};