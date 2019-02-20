/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    const max = Math.max(...A), min = Math.min(...A);
    
    return Math.max(max - min - 2 * K, 0);
};