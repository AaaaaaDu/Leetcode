/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var res = [],len = nums.length, sum;
    nums.sort(function(a,b){
        return a-b;
    });
    sum = nums[0]
    for(var i=1,len=nums.length;i<len;i++){
        if(nums[i]===nums[i-1]){
            res[0] = nums[i];
        }else{
            sum += nums[i];
        }
    }
    
    res[1] = len*(len + 1)/2 - sum;
    return res;
};

/*
    利用求和公式 (1+n)n/2 - sum, 找出缺失数
    
*/
/*
    [3,2,3,4,6,5]
    [1,5,3,2,2,7,6,4,8,9]
*/