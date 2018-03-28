/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var i, len, index = 1;
    for (i = 1, len = nums.length; i < len; i++) {
        if(nums[i]!=nums[i-1])  
        {  
            nums[index]=nums[i];  
            index++;  
        }  
    }
    nums.length = index;
    return index;
};
