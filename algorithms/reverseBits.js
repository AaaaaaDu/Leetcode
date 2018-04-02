/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bits = n.toString(2).split('').reverse();
    var l = bits.length;
    while (32 - l > 0) {
        bits.push('0');
        ++l;
    }
    return parseInt(bits.join(''), 2);
};
/*
    1.将两个数字转成二进制
    2.补齐位数
*/