/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var obj ={
        'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,
        'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,
        'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,
        'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26
    }
    var sum=0,s=s.split("").reverse().join("");
    for(var i=0,len=s.length;i<len;i++){
        sum+= Math.pow(26,i)*obj[s[i]];
    }
    return sum;
};
/*
    这是一道26进制转成十进制的题目
    例如: AB = 26^1*1+26^0+2
*/