/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {     
    if (dividend === -(2 ** 31) && divisor === -1) return 2 ** 31 - 1;

    let isNegative = dividend * divisor < 0 ? 1 : 0, res = 0;
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        let tag = 1;
        let base = divisor;
        while ((dividend >> 1) >= base) {
            tag <<= 1;
            base <<= 1
        }
        dividend -= base;
        res += tag;
    }

    return isNegative ? -res : res;
};