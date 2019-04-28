/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const len = candidates.length, res = [];
    
    candidates.sort();
    help([], 0, 0);
    
    return res;
    
    function help(arr, curIndex, sum) {
        if (sum > target) return;
        if (sum === target) {
            return res.push(arr);
        }
        
        for (let i = curIndex; i < len; i++) {
            if (i > curIndex && candidates[i] === candidates[i - 1]) continue;
            
            const num = candidates[i];
            
            arr.push(num);
            help(arr.slice(), i + 1, sum + num);
            arr.pop();
        }
    }
};