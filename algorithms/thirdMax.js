/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function(nums) {
//     //将nums排序并去重
//     nums.sort(function(a,b){
//         return b-a;
//     });
//     nums = new Set(nums);
//     nums = [...nums];
//     return nums.length>2?nums[2]:nums[0];
// };
var thirdMax = function(nums) {
    var a1 = -Number.MAX_VALUE,a2 = -Number.MAX_VALUE,a3 = -Number.MAX_VALUE;
    for(var i=0,len=nums.length;i<len;i++){
        if(nums[i]>a1){
            a3 = a2;
            a2 = a1;
            a1 = nums[i];
        }else if(nums[i]>a2 && nums[i]<a1){
            a3 = a2;
            a2 = nums[i];
        }else if(nums[i]>a3 && nums[i]<a2){
            a3 = nums[i];
        }
    }
    return a3 === -Number.MAX_VALUE?a1:a3;
};
