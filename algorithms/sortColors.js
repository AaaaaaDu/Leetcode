/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let len = nums.length - 1;
    
    for(let i = 0, j = 0; i <= len; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        } else if(nums[i] === 2) {
            [nums[i], nums[len]] = [nums[len], nums[i]];
            len--;
            i--;
        }
    }
};

/*
    使用三个指针分别表示0, 1, 2的位置
*/