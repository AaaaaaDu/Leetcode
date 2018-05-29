/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1])
            return i;
    }
    return nums.length - 1;
};
/*
    找到峰值索引之前, 数组一定是递增的
*/