/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    if(x%10===0 && x!==0) return false;
    
    var reseveNum = 0;
    while(x > reseveNum){
        reseveNum = x%10 + reseveNum*10;
        x = x/10 | 0;
    }
    console.log(x,reseveNum)
    return x === reseveNum || x === (reseveNum/10|0);
};
/*
    1.回文数的后半部分的逆序应该和回文数的前半部分相同
    2.reseveNum 用于储存x的后半部分
    3.当reseveNum大于x的时候，就到了这个整数的中间位置了
*/