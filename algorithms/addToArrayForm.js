/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let i = A.length - 1;

    while (K) {
        K += (A[i] || 0);
        let num = K % 10;
        
        if (i >= 0) {
            A[i] = num;
        } else {
            A.unshift(num);
        }
        
        K = ~~(K / 10);
        i--;
    }
    
    return A;
};