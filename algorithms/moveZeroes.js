/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var index=0;
    for(var i=0,len = nums.length;i<len;i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        }
    }
    for(;index<len;index++){
        nums[index]=0;
    }
};
/*
    1.将所有不为零的数移到前面
    2.然后将后面置零
*/