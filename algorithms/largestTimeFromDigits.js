/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    let h = "", m = "", max = -1;
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                for (let l = 0; l < 4; l++) {
                    if (!judge(i, j, k, l)) continue;
                    
                    let sum = A[i] * 3600 + A[j] * 60 + A[k] * 10+A[l];
                    
                    if (sum > max) {
                        max = sum;
                        h = A[i] + "" + A[j];
                        m = A[k] + "" + A[l];
                        
                    }
                }
            }
        }
    }
    
    if (max === -1) return "";
    
    return h + ':' + m;
    
    
    function judge(i, j, k, l) {
        if ((i-j)*(i-k)*(i-l)*(j-k)*(j-l)*(k-l) === 0) return false;
        
        if (A[i] > 2) return false;
        if (A[i] === 2 && A[j] >= 4) return false;
        if (A[k] > 5) return false;
        
        return true;
    }
};