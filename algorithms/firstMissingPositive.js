/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {   
    let len = nums.length, i = 0;
    
    while(i < len) {
        if (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
            let index = nums[i];
            nums[i] = nums[index -1];
            nums[index - 1] = index;
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    
    return len + 1;
};

/*
    [0,2,2,1,1]
*/