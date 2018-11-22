/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let arrN = (N + "").split(""), nLen = arrN.length, begin;
    
    for(let i = nLen - 1; i > 0; i--) {
        if (arrN[i] < arrN[i - 1]) {
            arrN[i - 1]--;
            begin = i;
        }
    }
    
    for(let i = begin; i < nLen; i++) {
        arrN[i] = '9';
    }
    
    return +arrN.join("");
};

/*
    用例: 10 1234 332 1323 120
    
    要找到从后往前遍历的最后一个值升高的位置，让前一位减1，并把当前位以及后面的所有位都变成9，就可以得到最大的单调递增数啦
*/