/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let res = [];
    let i = 1, j = n;
    while(i <= j){
        if(k > 1){
            res.push(k-- % 2? i++ : j--);
        }else{
            res.push(i++);
        }
    }
    return res;
};