/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(!k) return false;
    var len=nums.length;
    for(var i=0;i<len-k;i++){
        for(var j=i+1;j<=i+k;j++){
            if(j<len){
                if(nums[i]===nums[j]){
                    return true;
                }
            }
        }
    }
    return false;
};