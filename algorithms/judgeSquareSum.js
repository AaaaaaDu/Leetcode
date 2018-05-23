/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var upper = Math.sqrt(c),lower = 1;
    if(upper === Math.floor(upper)) return true;
    upper = Math.floor(upper); 
    while(lower<=upper){
        var n = lower * lower + upper * upper;
        if(n===c){
            return true;
        }else if(n>c){
            upper--;
        }else{
            lower++;
        }
    }
    return false;
};