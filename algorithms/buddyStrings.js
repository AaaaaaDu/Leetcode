/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;
    
    let len = A.length, count = 0, map = {}, sign = false, pre = -1;
    
    for (let i = 0; i < len; i++) {
        if (A[i] !== B[i]) {
            count++;
            
            if (count === 2) {
                sign = A[pre] === B[i] && A[i] === B[pre];
            }
            
            pre = i;
        }
        map[A[i]] = map[A[i]] + 1 || 1;
    }
    
    count !== 2 && (sign = false);

    count === 0 && (sign = Object.values(map).some(val => val >= 2));
    
    return sign;
};