/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let len = A.length, map = {}, count = 0;

    for(let i = 0; i < len; i++) { 
        for(let j = 0; j < len; j++) { 
            let key = A[i] + B[j];
            map[key] = map[key] + 1 || 1;
        }
    }
    
    for(let i = 0; i < len; i++) { 
        for(let j = 0; j < len; j++) {
            let key = -C[i] - D[j];
            map[key] && (count += map[key]);
        }
    }

    return count;
};