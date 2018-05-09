/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (var i = 1; num > 0; i += 2) {
        num -= i;
    }
    return num === 0;
};

/*
    相邻两个完全平方数的差为等差数列
*/