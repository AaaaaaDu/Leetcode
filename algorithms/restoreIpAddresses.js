/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    restore(s, [], 3)
    return res;
    
     /**
     * @param s 需要处理的字符串
     * @param result 储存当前字符串的数组
     * @param k 当前还有几个"."
     */
    function restore(s, result, k) {
        if (s.length === 0 || s.length > k * 3 + 3) return;
        if (k === 0) {
            if (s[0] === '0' && s.length !== 1 || parseInt(s) > 255) return;
            result.push(s);
            res.push(result.join('.'));
        }
        
        for(let i = 1; i < 4; i++) {
            let str = s.substr(0, i), arr = result.slice();
            if (str[0] === '0' && str.length !== 1 || parseInt(str) > 255) return;
            arr.push(str);
            restore(s.substr(i), arr, k - 1);
        }
    }
};

/*
    只要遇到字符串的子序列或配准问题首先考虑动态规划DP
    只要遇到需要求出所有可能情况首先考虑用递归
*/