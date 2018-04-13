/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    var res = [];
    for (var i = left; i <= right; i++) {
        i = i + "";
        var len = i.length,
            sign = true;
        for (j = 0; j < len; j++) {
            if (i[j] === 0 || i % i[j] !== 0) {
                sign = false;
                break;
            }
        }
        if (sign) res.push(i-0);
    }
    return res;
};