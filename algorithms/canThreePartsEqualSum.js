/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    const sum = A.reduce((pre, next) => pre + next) / 3,
          len = A.length;
    let curSum = 0, count = 0;

    for (let i = 0; i < len; i++) {
        curSum += A[i];
        
        if (curSum === sum) {
            curSum = 0;
            count++;
        }
    }
    
    
    return count === 3;
};