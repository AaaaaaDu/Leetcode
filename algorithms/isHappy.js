/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n===1) return true;
    var number = [];
    while(n!==1 && number.indexOf(n)===-1){
        var cur = 0;
        number.push(n);
        while(n!==0){
            cur += Math.pow(n%10,2);
            n = n/10 | 0;
        }
        n = cur;
    }
    return n === 1;
};
          
/*
    用一个数组将之前出现过的数保存下来
    若是 重复出现 或 n === 1 ,便跳出循环
*/