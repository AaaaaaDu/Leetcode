/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length===0) return 0;
    var max = 1, count = 1;
    for(var i=1,len=nums.length;i<len;i++){
        if(nums[i]>nums[i-1]){
            count++;
            max = Math.max(max,count);
        }else{
            count = 1;
        }
    }
    return max;
};