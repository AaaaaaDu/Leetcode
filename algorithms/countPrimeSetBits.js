/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    var num=0,count=0;
    for(var i=L;i<=R;i++){
        var s = i.toString(2)
        for(var j=0;j<s.length;j++){
            if(s[j] === "1") num++;
        }
        //console.log(num,s,isPrimes(num))
        if(isPrimes(num)){
            count++;
        }
        num=0;
    }
    return count;
};

var isPrimes = function(n) {
    if(n === 1) return false;
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0) return false;
    }
    return true;
};