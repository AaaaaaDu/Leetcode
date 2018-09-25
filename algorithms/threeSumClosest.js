/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = Number.MAX_VALUE, difference = Number.MAX_VALUE, len = nums.length;
    
    nums.sort((a, b) => a-b);

    for(let i = 0; i < len - 2; i++) {
        if(nums[i] === nums[i - 1]) continue;
        let start = i + 1, end = len - 1;
        
        while(start < end) {
            const sum = nums[start] + nums[end] + nums[i];

            if (sum < target) {
                if(target - sum < difference) {
                    difference = target - sum;
                    res = sum;
                }
                start++;
            } else if (sum > target) {
                if(sum - target < difference) {
                    difference = sum - target;
                    res = sum;
                } 
                end--;
            } else {
                return target;
            }
        }
    }
    return res;
};