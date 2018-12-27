/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1, sign = 1;
    
    while(left <= right && sign) {
        if (nums[left] === target && nums[right] === target) {
            sign = 0
        } else {
            if (nums[left] !== target) left++;
            if (nums[right] !== target) right--;
        }
    }
    
    return sign ? [-1, -1] : [left, right];
};