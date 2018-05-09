/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(nums.length === 1) return 0;
    var n = nums.concat();
    n.sort(function(a,b){
        return b-a;
    });
    if(n[0]>=2*n[1]){
        return nums.indexOf(n[0]);
    }else{
        return -1;
    }
};

// n 为 nums 的深拷贝