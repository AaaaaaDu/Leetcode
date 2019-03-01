/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if (N === 1) return 1;
    const map1 = [], map2 = {};
    
    trust.forEach(val => {
        if (!map1.includes(val[0])) map1.push(val[0]);
        map2[val[1]] = map2[val[1]] + 1 || 1;
    });
    console.log(map1, map2)
    for (let item in map2) {
        if (map2[item] === N - 1 && !map1.includes(item - 0)) return item;
    }
    
    return -1;
};