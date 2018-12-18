/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    
    let dp = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        let min = 0, max = dp.length;
        while (max > min) {
            let mid = ~~((min + max) / 2);
            dp[mid] < nums[i] ? min = mid + 1 : max = mid;
        }
        dp[max] = nums[i];
    }
    
    return dp.length;
};

/*
    dp 为 最长上升子序列
*/