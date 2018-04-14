/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    if(nums.length<2) return 0;
    var sum = 0;
    nums.sort(function(a,b){
        return a-b;
    })
    for(var i=nums.length-2;i>=0;i-= 2){
        sum += nums[i];
    }
    return sum;
};