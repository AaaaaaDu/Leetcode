/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
    利用k把数组分两半；reverse左右两边数组；reverse总数组,到达颠倒整个数组的效果
        利用数组的length - k 把数组 分为两半；
        reverse 左边和右边的数组；
        reverse 总数组。
*/

var rotate = function(nums, k) {
    var len =nums.length;
    if(k % len=== 0) return;
    
    k = len - k%len;
    
    reverse(nums,0,k-1);
    reverse(nums,k,len-1);
    reverse(nums,0,len-1);
};

function reverse(nums,start,end){//颠倒start到end之间的元素
    var t;
    while(start < end){
        t = nums[start];
        nums[start] = nums[end];
        nums[end] = t;
        
        start++;
        end--;
    }
}