/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(var i=0,len=nums.length;i<len;i++){
        if(nums.lastIndexOf(nums[i])===nums.indexOf(nums[i])){
            return nums[i]
        }
    }
};