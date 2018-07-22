/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res = [1], len = nums.length, right = 1;
    for(var i=1;i<len;i++){//储存i左边的乘积之和
        res[i] = res[i-1] * nums[i-1];
    }
    for(var i=len-1;i>=0;i--){//乘上i右边的乘积之和
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};