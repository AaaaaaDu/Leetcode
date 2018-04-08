/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var last = -1;
    var map = {};

    for (var i = 0, l = s.length; i < l; ++i) {
        if (map[s[i]] >= 0 && last < map[s[i]]) {
            last = map[s[i]];
        }

        if (i - last > max) {
            max = i - last;
        }
        map[s[i]] = i;
    }
    return max;
};
/*
    将数组元素以"值":"索引"的形式保存
    last保存最后一个重复元素的索引
*/