/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var a = {},b = {},toS = "",toT = "";
    for(var i=0,len=s.length;i<len;i++){
        if(!a.hasOwnProperty(s[i])){//s到t的单向映射
            a[s[i]] = t[i];
        }
        if(!b.hasOwnProperty(t[i])){//t到s的单向映射
            b[t[i]] = s[i];
        }
    }
    for(var i=0;i<len;i++){
        if(b[t[i]]){
            toS += b[t[i]];
        }
        if(a[s[i]]){
            toT += a[s[i]];
        }
    }
    
    if(toT===t && toS===s){
        return true;
    }else{
        return false;
    }
};
/*
    两个方向的映射都需要考虑, 不能偷懒
*/
/*
    "ab"
    "aa"
*/