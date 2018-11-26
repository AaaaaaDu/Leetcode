/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let ALen = A.length, strLen = A[0].length, count = 0;
    
    for(let i = 0; i < strLen; i++) {
        for(let j = 1; j < ALen; j++) {
            if (A[j][i] < A[j - 1][i]) {
                count++;
                break;
            }
        }
    }
    
    return count;
};