/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var newNum = 0;
    while(x){
        newNum = newNum*10+x%10;
        x = parseInt(x/10);
    }
    if(newNum>Math.pow(2,31) || newNum <Math.pow(-2,31)){
        return 0;
    }else{
        return newNum;
    }
};