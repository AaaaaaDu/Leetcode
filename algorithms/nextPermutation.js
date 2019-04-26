/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    let last = len - 1;
    while (last >= 1) {
        if (nums[last] > nums[last - 1]) {
            let i = last + 1;
            for (; i < len; i++) {
                if (nums[i] <= nums[last - 1]) break; 
            }
            [nums[i - 1], nums[last - 1]] = [nums[last - 1], nums[i - 1]];
            return revertArr(nums, len, last);
        } else {
            last--;
        }
    }
    return revertArr(nums, len)
};

function revertArr (nums, len, startIdx = 0) {
    let [i, j] = [startIdx, len - 1];
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++; 
        j--;
    }
}