/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = '', num = [], factorial = [1];
    
    for(let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
        num.push(i);
    }
    
    k = k - 1;
    num.push(n);
    
    for (let i = n; i >= 1; i--) {
        let j = Math.floor(k / factorial[i - 1]);
        k %= factorial[i - 1];
        res += num[j];
        num.splice(j, 1);
    }       
    return res;

};