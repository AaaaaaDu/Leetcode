/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split("").sort().join("");//字符串排序
    t = t.split("").sort().join("");
    var i = 0;
    while(i < s.length){
        if(s[i] !== t[i]) return t[i];
        i++;
    }
    return t[i];
};