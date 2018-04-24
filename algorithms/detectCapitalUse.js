/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var count = 0,sign=true,fristSign=true;//fristSign第一个字母大小写的标志位,sign后面字母是否有大写的标志位
    if(word[0] >= 'A' && word[0] <= 'Z'){
        fristSign=false;
    }
    for(var i=1,len=word.length;i<len;i++){
        if(word[i] >= 'A' && word[i] <= 'Z'){
            sign = false;
            count++;
        }
    }
    if(fristSign && !sign){
        return false
    }
    if(!sign){
        if(count !== len-1){
            return false;
        }
    }
    return true;
};