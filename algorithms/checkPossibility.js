/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    for(var i=1,len=nums.length;i<len;i++){
        if(nums[i]<nums[i-1]){
            var t = nums[i-1];
            nums[i-1] = nums[i];
            var sign1 = check(nums);
            nums[i-1] = nums[i] = t;
            var sign2 = check(nums);
            return sign1 || sign2;
        }
    }
    return true;
};
function check(n){
    var copy = n.concat(),len=n.length;
    copy.sort(function(a,b){
        return a-b;
    })
    for(var i=0;i<len;i++){
        if(copy[i]!==n[i]){
            return false;
        }
    }
    return true;
}
/*
    [2,3,3,2,4]
*/