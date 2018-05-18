/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor((-1+Math.floor(Math.sqrt(1+8*n)))/2);
};

/*
    1-n的求和公式: n(n+1)/2 = sum
    这题需要根据sum, 求n
*/