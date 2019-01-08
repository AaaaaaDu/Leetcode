/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, -n);
    } else {
        return power(x, n);
    }
    
    function power(x, n) {
        if (n === 0) return 1;
        
        let res = power(x, Math.floor(n / 2));
        
        if (n % 2 === 0) {
            return res * res;
        } else {
            return res * res * x;
        }
    }
};