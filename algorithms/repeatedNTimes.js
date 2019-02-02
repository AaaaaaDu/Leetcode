/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const map = {}, len = A.length;
    
    for(let i = 0; i < len; i++) {
        if(!map[A[i]])
            map[A[i]] = 1
        else {
            return A[i]
        }
    }
};