/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let n = {}, max = Number.MIN_VALUE, res = Number.MAX_VALUE;
    nums.forEach(function(a){
        n[a] = n[a]+1 || 1;
    });
    
    for(item in n){
        if(!n.hasOwnProperty(item)) continue;
        
        if(n[item] > max){
            max = n[item];
            res = Number.MAX_VALUE;
        }
        
        if(n[item] === max){
            res = Math.min(res,nums.lastIndexOf(item-0)-nums.indexOf(item-0)+1);
        }
    }
    return res;
};