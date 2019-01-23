/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let slen = s.length, tlen = t.length, res = "", map = {}, count = 0, left = 0, resLen = Number.MAX_VALUE;
    
    for (let i = 0; i < tlen; i++) {
        map[t[i]] = map[t[i]] + 1 || 1;
    }
    
    for (let i = 0; i < slen; i++) {
        if (--map[s[i]] >= 0) count++;
        
        while (count === tlen) {
            if (resLen > i - left + 1) {
                resLen = i - left + 1;
                res = s.substr(left, resLen);
            }
            if (++map[s[left]] > 0) count--;
            ++left;
        }
    }
    
    return res;
};

/* 
    先扩充右边界, 再收缩右边界
*/