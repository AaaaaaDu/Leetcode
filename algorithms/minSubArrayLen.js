/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let start = 0, end = 0, len = nums.length, sum = 0, res = len + 1;
    while(start < len) {
        if (end < len && sum < s) {
            sum += nums[end++];
        } else { 
            sum -= nums[start++];
        }
        if (sum >= s) {
            res = Math.min(res, end - start);
        }

    }
    return res === len + 1? 0 : res;
};