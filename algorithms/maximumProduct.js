/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function(a,b){
        return b-a;
    });

    return Math.max(nums[0]*nums[nums.length-1]*nums[nums.length-2],nums[0]*nums[1]*nums[2]);
};

//用例 : [-4,-3,-2,-1,60] [-20,-20,-1,1,2,3]