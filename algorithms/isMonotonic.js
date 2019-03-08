/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let isUp = 0, isDown = 0, len = A.length;
    
    for (let i = 1; i < len; i++) {
        if (isUp && isDown) return false;
        
        if (A[i] > A[i - 1]) isUp = 1;
        if (A[i] < A[i - 1]) isDown = 1;
    }
    
    return !(isUp && isDown);
};