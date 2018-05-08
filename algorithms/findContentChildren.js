/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var gIndex = 0, sIndex = 0, num = 0;
    g.sort(function(a,b){
        return a-b;
    });
    s.sort(function(a,b){
        return a-b;
    });
    while(gIndex<g.length && sIndex<s.length){
        if(g[gIndex] <= s[sIndex]){
            num++;
            gIndex++; 
        }
        sIndex++;
    }
    return num;
};