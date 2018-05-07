/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var r = {}, m = {},res = true;
    ransomNote.split("").forEach(function(a){
        r[a] = r[a]+1 || 1;
    });
    magazine.split("").forEach(function(a){
        m[a] = m[a]+1 || 1;
    });
    for(item in r){
        if(!m[item] || r[item]>m[item]){
            res = false;
        }
    }
    return res;
};