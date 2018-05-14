/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum = 0, max = 0;
    for(var i=0;i<k;i++){
        sum += nums[i];
    }
    max = sum;
    for(var i=k,len=nums.length;i<len;i++){
        sum += nums[i] - nums[i-k];
        max = Math.max(max,sum);
    }
    return max/k;
};