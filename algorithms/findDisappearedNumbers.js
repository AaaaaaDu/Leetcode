/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var n = nums.length,res = [];
    for (var i = 0; i < n; ++i) {
        nums[(nums[i] - 1) % n] += n;            
    }
    for (var i = 0; i < n; ++i) {
        if (nums[i] <= n) {
            res.push(i + 1);
        }
    }
    return res;
};

/*
    若存在 i ,就将nums[i-1]+n, 以此标记i存在(n为数组长度)
    如 nums[j] = 7, 就将 sums[6] + n
*/