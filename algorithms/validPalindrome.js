/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var len = s.length-1,i=0,sign=0;
    while(i<len){
        if(s[i]===s[len]){
            i++;
            len--;
        }else{
            return isPalindrome(s,i+1,len) || isPalindrome(s,i,len-1);
        }
    }
    return true;
};

function isPalindrome(s,i,j){
    if (i > j) return false;  
    while(i <= j) {  
        if (s[i++] != s[j--])  
            return false;  
    }  
    return true;
}
/*
    "eedede"
*/