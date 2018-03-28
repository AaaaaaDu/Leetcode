/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
    利用异或,将只有一个的元素找出
 */
var singleNumber = function(nums) {
    var n = nums[0];
    for(var i=1,len=nums.length;i<len;i++){
        n ^= nums[i];
    }
    return n;
};