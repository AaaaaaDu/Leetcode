/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map1 = {}, res = [], map2 = {}, sort = [];
    
    // 计算每个数字出现的次数
    nums.forEach(val => map1[val] = map1[val] + 1 || 1);
    
    // 颠倒key和value方便排序
    Object.keys(map1).forEach(val => {
        map2[map1[val]] && map2[map1[val]].push(val) || (map2[map1[val]] = [val]);
    });
    sort = Object.keys(map2).sort((a, b) => b - a);
    
    for(let i = 0; i < sort.length; i++) {
        res = [...res, ...map2[sort[i]]];
        if (res.length === k) {
            for(let j = 0; j < k; j++) {
                res[j] = parseInt(res[j]);
            }
            return res
        };
    }
};