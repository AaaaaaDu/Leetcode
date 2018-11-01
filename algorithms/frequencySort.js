/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map(), arr = [];
    for (let c of s) {
        map.set(c, map.get(c) + 1 || 1);
    }
    
    map.forEach((value, key) => arr.push([key, value]));
    
    arr.sort((a, b) => b[1] - a[1]);
    
    return arr.map(e => new Array(e[1]).fill(e[0]).join("")).join("");
};