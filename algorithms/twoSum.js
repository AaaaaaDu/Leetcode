/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(var i=0,len=nums.length;i<len;i++){
//         for(var j=i+1;j<len;j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    var a=[];
    for(var i=0,len = nums.length;i<len;i++){
        var tmp = target - nums[i];
        if(a[tmp] !== undefined) return [a[tmp],i];
        a[nums[i]] = i;
    }
}
/*
    方法一:遍历数组两次,一一匹配
    方法二:
        将未匹配的元素以"值":索引的形式保存在另外的数组中 在进行匹配
*/