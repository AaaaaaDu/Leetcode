/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    return nums[0];
};