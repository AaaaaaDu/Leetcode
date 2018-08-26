/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (t == 0) {
        var set = new Set(nums);
        return set.size != nums.length ? true : false;
    }

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var a = Math.abs(nums[i] - nums[j]);
            if (a <= t && j - i <= k) {
                return true;
            }
        }
    }

    return false;


};