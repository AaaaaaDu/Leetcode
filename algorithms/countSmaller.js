/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let res = new Array(nums.length).fill(0), sort = [];
    
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = find(nums[i]);
    }
    
    return res;
    
    function find(num) {
        let r = sort.length, l = 0;
        
        while (l < r) {
            let mid = Math.floor((r + l) / 2);
            
            if (sort[mid] >= num) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        sort.splice(l, 0, num);
        
        return l;
    }
};