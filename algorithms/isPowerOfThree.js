/**
 * @param {number} n
 * @return {boolean}
 */
//递归
// var isPowerOfThree = function(n) {
//     if (n === 1) return true
//     if (n % 3 !== 0 || n === 0) return false
//     return isPowerOfThree(n / 3)
// };
//迭代
// var isPowerOfThree = function(n) {
//     if (n < 1) return false
//     while (n % 3 === 0) n /= 3
//     return n === 1
// };
//对数计算
var isPowerOfThree = function(n) {
    var tmp = Math.log10(n)/Math.log10(3);
    //console.log(tmp)
    return (tmp-Math.floor(tmp))===0?true:false;
};