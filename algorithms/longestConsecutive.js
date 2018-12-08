/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let max = 1, map = {};
    
    nums.forEach(val => {
        map[val] = 1;
    });
    
    nums.forEach(val => {
        if (!map[val]) return;
        
        delete map[val];
        
        let pre = val - 1, next = val + 1;
        
        while(map[pre]) delete map[pre--];
        while(map[next]) delete map[next++];
        
        max = Math.max(max, next - pre - 1);
    });
    
    
    return max;
};