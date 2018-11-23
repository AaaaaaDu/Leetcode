/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) return nums.length;
    let len = nums.length, preDiff = nums[1] - nums[0], count;
    
    count = preDiff === 0 ? 1 : 2;
    
    for(let i = 2; i < len; i++) {
        const diff = nums[i] - nums[i - 1];
        if ((preDiff >= 0 && diff < 0) || (preDiff <= 0 && diff > 0)) {
            count++;
            preDiff = diff;
        }
    }
    
    return count;
};