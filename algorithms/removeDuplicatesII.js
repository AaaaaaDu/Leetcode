/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length===0) return 0;
    var index=1,len=nums.length,count=1;
    for(var i=1;i<len;i++){
        if(nums[i]===nums[i-1] && count!==2){
            nums[index] = nums[i];
            index++;
            count++;
        }else if(nums[i]!==nums[i-1]){
            nums[index] = nums[i];
            index++;
            count = 1;
        }
    }
    return index;
};