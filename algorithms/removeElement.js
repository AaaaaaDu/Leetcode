/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(!(nums.indexOf(val) == -1)){
        nums.splice(nums.indexOf(val),1)
    }
};