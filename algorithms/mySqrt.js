/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var l=0,h=x;
    while(true){
        var mid = Math.floor((l+h)/2);
        if(mid*mid>x){
            h = mid-1;
        }else if(mid*mid<x){
             if ((mid + 1) * (mid + 1) > x) {
                return mid
            }
            l = mid + 1
        }else{
            return mid;
        }
    }
};