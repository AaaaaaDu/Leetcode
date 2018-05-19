/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num===1) return false;
    var sum = 1;
    for(var i=2;i<Math.sqrt(num);i++){
        if(num%i===0){
            sum += i + num/i;
        }
    }
    return sum===num;
};