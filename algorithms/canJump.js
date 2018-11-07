/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // max为当前可以到的最远索引
    let max = 0;
    for (let i = 0; i < nums.length - 1; ++i) {
        if (i === max && nums[i] === 0) {
            return false;
        }
        max = Math.max(nums[i] + i, max);
    }
    return true;
};
