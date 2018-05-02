/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums===[]) return 0;
    var res = nums.indexOf(target);
    if(res===-1){
        for(var i=0;i<nums.length;i++){
            if(nums[i]>=target) break;
        }
        res = i;
    }
    return res;
};