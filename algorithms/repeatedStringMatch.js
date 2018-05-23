/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var reg = new RegExp(B)
    var s = "",count=0;
    while(s.length<B.length){
        s += A;
        count++;
    }
    if(reg.test(s)){
        return count;
    }else{
        s += A;
        count++;
        return reg.test(s)?count:-1;
    }
};