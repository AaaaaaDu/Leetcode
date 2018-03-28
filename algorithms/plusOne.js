/**
 * @param {number[]} digits
 * @return {number[]}
 */

/*  
    1.当前位为9,置零,然后前一位加1
    2.首位为9的情况,需要置零添加位数
    3.当前位小于9,直接加1
*/

var plusOne = function(digits) {
    for(var len=digits.length-1;len>=0;len--){
        if(digits[len]<9){
            digits[len]++;
            return digits;
        }else if(digits[len] === 9 && len === 0){
            digits[len] = 0;
            digits.unshift(1);
            return digits;
        }else{
            digits[len] = 0;
        }
    }
};