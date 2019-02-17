/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let l = 0, r = A.length - 1, mid;
    
    while(l < r) {
        mid = Math.floor((l + r) / 2);
        
        if (A[mid] < A[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    
    return l;
};