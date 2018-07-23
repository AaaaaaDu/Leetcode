/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var len = nums.length, high = len - 1, low = 0, mid, count;
    
    while(low<high){
        mid = Math.floor((high + low)/2);
        count = 0;
        for(var i=0;i<len;i++){
            if(nums[i]<=mid){
                count++
            }
        }
        if(count>mid){
            high = mid;
        }else{
            low = mid + 1;
        }
    }
    return low;
};

/*
    二分法，因为数出现在[1，n]。所以统计[1-n/2]的数，如果出现小于等于n/2的数个数超过n/2,[1-n/2]数中有重复的数，
    继续通过二分减少搜索范围，这里的时间复杂度为nlogn
*/