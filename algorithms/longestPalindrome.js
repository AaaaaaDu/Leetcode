/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === null || s.length === 0) return "";
    var sLen = s.length;

    var longest = 1;
    var start = 0;
    var end = 0;
    var inc;
    for (var iPivot = 0; iPivot < sLen - 1; iPivot++) {
        //odd
        var curLen = 1;
        var incMax = Math.min(iPivot + 1, sLen - iPivot);
        for (inc = 1; inc < incMax; inc++) {
            var prevPos = iPivot - inc;
            var nextPos = iPivot + inc;
            if (s.charAt(prevPos) != s.charAt(nextPos)) break;
            curLen += 2;
            if (curLen > longest) {
                longest = curLen;
                start = prevPos;
                end = nextPos;
            }
        }
        //even
        var iPivot2 = iPivot + 1;
        if (s.charAt(iPivot) != s.charAt(iPivot2)) continue;
        curLen = 2;
        if (curLen > longest) {
            longest = curLen;
            start = iPivot;
            end = iPivot2;
        }
        incMax = Math.min(iPivot + 1, sLen - iPivot2);
        for (inc = 1; inc < incMax; inc++) {
            var prevPos = iPivot - inc;
            var nextPos = iPivot2 + inc;
            if (s.charAt(prevPos) != s.charAt(nextPos)) break;
            curLen += 2;
            if (curLen > longest) {
                longest = curLen;
                start = prevPos;
                end = nextPos;
            }
        }
    }
    return s.substr(start, end - start + 1);
};
/*以每个位置为中心点，分别向左向右扫描*/