/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let res = [0, 1];
    
    for (let i = 2; i <= N; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    
    return res[N];
};