/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var a = 0;
    var b = 0;
    for (let i = 1; i <= nums.length; i++) {
        a += i;
    }
    for (let i = 0; i < nums.length; i++) {
        b += nums[i];
    }
    return a - b;
};
//计算0到n之和,计算给定数组的和,二者之差就是所缺数字