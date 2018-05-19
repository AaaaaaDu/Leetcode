/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var n = nums.length;
    var beg = -1;
    var end = -2; 
    var min = nums[n-1];
    var max = nums[0];

    for(var i=0; i<n; i++)
    {
       max = Math.max(max, nums[i]);
       min = Math.min(min, nums[n-1-i]);

       if(nums[i] < max)
          end = i;
        if(nums[n-1-i] > min)
            beg = n-1-i;
    }    

    return end - beg + 1;
};

/*
   [1]
   [1,2,3,4]
*/