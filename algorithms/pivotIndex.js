/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = 0, left = 0;
    nums.forEach(function(a){
        sum += a;
    });
    for(var i=0,len=nums.length;i<len;i++){
        if(left === (sum-nums[i])/2){
            return i;
        }
        left += nums[i];
    }
    return -1;
};