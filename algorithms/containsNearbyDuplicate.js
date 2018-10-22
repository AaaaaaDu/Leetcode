/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(!k) return false;
    let len=nums.length, map = new Map();
    for(let i = 0; i < len; i++) {
        let preIndex = map.get(nums[i]);
        if(preIndex !== undefined && i - preIndex <= k) return true;
        
        map.set(nums[i], i);
    }
    return false;
};