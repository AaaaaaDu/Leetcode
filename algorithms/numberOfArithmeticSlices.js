/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    var len = A.length,count=0;
    for(var i=0;i<len-2;i++){
        for(var j=3;i+j<len+1;j++){
            var a = A.slice(i,i+j);
            if(isArithmetic(a)){
                count++;
            }else{
                break;
            }
        }
    }
    
    return count;
    
    function isArithmetic(arr){
        if(arr.length<3) return false;
        var num = arr[1] - arr[0];
        for(var i=2;i<arr.length;i++){
            if(arr[i]-arr[i-1]!==num) return false;
        }
        return true;
    }
};