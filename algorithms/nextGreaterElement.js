/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
    var len1 = findNums.length,len2 = nums.length,res = [];
    for (var i = 0; i < len1; i++) {
        for (var j = nums.indexOf(findNums[i]); j < len2; j++) {
            if (nums[j] > findNums[i]) {
                res.push(nums[j]);
                break;
            }
        }
        if (res.length === i) {
            res.push(-1)
        }
    }
    return res;
};