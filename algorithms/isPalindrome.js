/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var reg =/\w/;
    if(s === "") return true;
    var i=0,j=s.length-1;
    while(i<j){
        if(!reg.test(s[i])){
            ++i;
            continue;
        }else if(!reg.test(s[j])){
            --j;
            continue;
        }else{
            if(s[j].toLocaleUpperCase()!==s[i].toLocaleUpperCase()){
                return false;
            }else{
                i++;
                j--;
            }
        } 
    }
    return true;
};
//需要注意其他字符的判断