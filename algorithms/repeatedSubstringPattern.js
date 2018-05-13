/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var len = s.length
    for(var i=Math.floor(len/2);i>0;i--){
        if(len % i===0){
            var c = len / i;
            var t = "";
            for(var j=0;j<c;j++){
                t += s.slice(0,i);
            }
            if(t===s) return true;
        }
    }
    return false;
};
/*
    重复子串长度最长为len/2，直接每次选择一个可以被整除的较小的数，截取开头的那几个字符，然后重复到原长度验证就好
*/