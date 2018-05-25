/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if(nums.length===1) return nums[0]+"";
    if(nums.length===2) return nums[0]+"/"+nums[1];
    var res = nums[0] + "/(" +nums[1];
    for(var i=2,len=nums.length;i<len;i++){
        res += "/" + nums[i];
    }
    res += ")";
    return res;
};

/* 只要除数最小就可以得到最大的商 */