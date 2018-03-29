/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    var a={},b={};
    for(var i=0,len=s.length;i<len;i++){
        a[s[i]]= a[s[i]]+1 || 1;
        b[t[i]]= b[t[i]]+1 || 1;
    }
    for(item in a){
        if(a[item] !== b[item]){
            return false;
        }
    }
    return true;
};