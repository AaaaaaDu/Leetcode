/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let length = nums.length
    let sum = max = nums[0]
    
    for(let i = 1; i < length; i++) {
       if(sum > 0) {
           sum += nums[i]
       } else {
           sum = nums[i]
       }
        
        max = sum > max ? sum : max
    }
    
    return max
    
};
/*
    求和，然后判断和是否小于0，因为只要前面的和小于0，那么后面的数加上前面
    的和就一定比自身小，所以又重新求和，并和之前的最大子序和比较，取最大值
*/