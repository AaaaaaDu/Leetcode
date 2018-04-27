/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var len=s.length,pre=0,cur=1,res=0;
    for(var i=1;i<len;i++){
        if(s[i] !== s[i-1]){
            pre = cur;
            cur = 1;
        }else{
            cur++;
        }
        if(pre >= cur) res++;
    }
    return res;
};
/*
    pre是前一种数字的数量
    cur是现在数字的数量
    pre>=cur 的情况下, cur每次加一 , 都会多一种子串
*/