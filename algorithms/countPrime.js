/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var isPrime = new Array(n);
    for (var i = 2; i < n; i++) isPrime[i] = true;
    for (i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (var j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    var count = 0;
    for (i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count; 
};
