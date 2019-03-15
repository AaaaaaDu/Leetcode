/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length <= 2) return false;
    
    let len = A.length, i = 0;
    
    while (i < len -1 && A[i] < A[i+1]) {
        i++;
    }
    
    if (i === len - 1 || i === 0) return false;
    
    while (i < len -1 && A[i] > A[i+1]) {
        i++;
    }
    
    if (i !== len - 1) return false;
    
    return true;
};