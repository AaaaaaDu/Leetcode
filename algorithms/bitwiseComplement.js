/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let arr = N.toString(2).split("");

    arr = arr.map(val => val === '1' ? '0' : '1');

    return parseInt(arr.toString().replace(/\,/g,''), 2);
};