/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var a = {}, res = 0;
    for(var i=0,len=s.length;i<len;i++){
        a[s[i]] = a[s[i]]+1 || 1;
    }
    for(item in a){
        if(a.hasOwnProperty(item)){
            if(a[item] % 2 === 0){
                res += a[item];
            }else{
                res += a[item] - 1;
            }
        }
    }
    return res+1 > len? len : res+1;
};