/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
//      t很长, 所以导致这个方法的耗时更多 
//     let sIndex = 0, tlen = t.length, slen = s.length;
//     for(let i = 0; i < tlen; i++) {
//         if (s[sIndex] === t[i]) sIndex++;
//     }

//     return sIndex === slen;
    var start = 0;
    for(var i = 0; i < s.length;i++) {
        var idx = t.indexOf(s[i],start);
        if(idx === -1) {
            return false
        }
        start = idx + 1;
    }
    return true;
};
/*
    双指针
*/