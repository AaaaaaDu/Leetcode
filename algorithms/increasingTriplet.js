/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var m1 = Number.MAX_VALUE,m2 = Number.MAX_VALUE;
    for(var i=0,len=nums.length;i<len;i++){
        console.log(nums[i],m1,m2)
        if(m1>=nums[i]) m1=nums[i];
        else if(m2>=nums[i]) m2=nums[i];
        else return true;
    }
    return false
};
/*
    这个思路是使用两个指针m1和m2，初始化为整型最大值，我们遍历数组，如果m1大于等于当前数字，则将当前数字赋给m1；
    如果m1小于当前数字且m2大于等于当前数字，那么将当前数字赋给m2，一旦m2被更新了，说明一定会有一个数小于m2，那么
    我们就成功的组成了一个长度为2的递增子序列，所以我们一旦遍历到比m2还大的数，我们直接返回ture
*/