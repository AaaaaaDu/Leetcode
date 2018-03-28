/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    利用一个对象将没有重复的值 以"值":"索引"的形式保存下来
*/

var containsDuplicate = function (nums) {
    var a={},len=nums.length,i=0;
    for(;i<len;i++){
        if(a[nums[i]] !== undefined) return true;
        a[nums[i]] = 1;
    }
    return false
};