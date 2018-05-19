/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var type = 1, count = 9;
    while(n > type*count){
        n -= count*type;
        count *= 10;
        type++;
    }
    
    var digitIndex = Math.floor((n - 1) / type);
    var numIndex = (n - 1) % type;

    return +(Math.pow(10,type-1) + digitIndex + "").charAt(numIndex)
};