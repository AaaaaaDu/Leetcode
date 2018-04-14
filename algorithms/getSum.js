/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let sum = (a&b) << 1;  // 记录进位
    let i = a ^ b;         // 异或，无进位相加 
    if (sum === 0) {
        return i;
    } else {
        return getSum(sum, i);//如果有进位再把进位加上
    }
    // 直到不再产生进位为止
};