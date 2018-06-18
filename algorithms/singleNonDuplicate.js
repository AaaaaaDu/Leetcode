/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var len = nums.length;
    
    for(var i=0;i<len;i+=2){
        if(nums[i]!==nums[i+1]){
            return nums[i];
        }
    }
   
};

