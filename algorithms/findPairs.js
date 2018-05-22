/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var count = 0,len=nums.length;
    if(k>0){
        nums = new Set(nums);
        nums = [...nums];
        for(var i=0;i<len;i++){
            for(var j=0;j<len;j++){
                if(Math.abs(nums[i]-nums[j])===Math.abs(k)){
                    count++;
                }
            }
        }
        return count/2;
    }else if(k===0){
        var a = {};
        nums.forEach(function(b){
            a[b] = a[b] + 1 || 1;
        })
        for(var item in a){
            if(a[item] > 1){
                count += 1;
            }
        }
    }
    return count;
};