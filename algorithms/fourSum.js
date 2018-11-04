/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length, map = {}, set = {}, res = [];
    
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < len; i++) {
        if(i !== 0 && nums[i] === nums[i - 1]) continue;
        
        for(let j = i + 1; j <len; j++) {
            if(j !== i + 1 && nums[j] === nums[j - 1]) continue;
            
            let l = j + 1;
            let r = nums.length - 1;
            while (l < r) {
                let sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum == target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (sum < target) {
                    l++;
                } else {
                    r--;
                }
            }

        }
    }
    return res;
};

/*
    [-3,-2,-1,0,0,1,2,3]
    0
    
    [-5,5,4,-3,0,0,4,-2]
    4
*/