/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var res = [];
    find([],k,n);
    return res;
    
    function find(arr,k,n){
        if(k===1 && n<=9 && n>0 && !isHas(arr,n)){
            arr.unshift(n);
            if(isUpperArr(arr)){
                res.push(arr.concat());
            }
            arr.shift();
            return;
        }
        if(k===1) return;
        var i = n > 9 ? 9 : n-1;
        for(;i>0;i--){
            if(!isHas(arr,i)){
                arr.unshift(i);
                find(arr,k-1,n-i);
                arr.shift();
            }
        }
    }
    
    function isHas(arr,n){//排除重复元素
        for(var i=0,len=arr.length;i<len;i++){
            if(n===arr[i]) return true;
        }
        return false;
    }
    
    function isUpperArr(arr){//判断升序数组
         for(var i=1,len=arr.length;i<len;i++){
            if(arr[i]<arr[i-1]) return false;
        }
        return true;
    }
};