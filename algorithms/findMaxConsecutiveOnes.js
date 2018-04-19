/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count=0,max=0;
    for(var i=0,len=nums.length;i<len;i++){
        if(nums[i] === 1){
            count++;
        }else{
            if(count > max){
                max = count;
            }
            count = 0;
        }
    }
    return max>count?max:count;
};