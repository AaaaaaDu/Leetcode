/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const a = A.reduce((sum, val) => sum + val),
          b = B.reduce((sum, val) => sum + val),
          change = -(a - b) / 2,
          len = A.length;
    
    for (let i = 0; i < len; i++) {
        if (B.includes(A[i] + change)) return [A[i], A[i] + change];
    }

};