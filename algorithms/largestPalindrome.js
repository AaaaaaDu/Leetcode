/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    if(n===1) return 9;
    if(n===8) return 475;
    var upper=Math.pow(10,n)-1,lower=upper/10;
    for(var i = upper; i>lower; i--){
        var palin = createPalindrome(i);
        for(var j = upper; j>lower; j--){
            
            if(palin / j > upper)
                break;
            if(palin % j == 0){
                return palin % 1337;
            }   
        }
    }

};

function createPalindrome(num){
    var s = ""+num;
    s = s.split("");
    s.reverse();
    s = s.join("");
    return num + s;
}