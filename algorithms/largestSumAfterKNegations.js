/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    let i = 0;
    
    A.sort((a, b) => a - b);

    while (K) {
        A[i] = -A[i];

        if (A[i + 1] !== undefined && A[i + 1] < A[i]) i++;
        
        K--;
    }

    return A.reduce((sum, val) => sum + val);
};