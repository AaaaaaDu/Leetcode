/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var aPlus = a.match(/\+/).index,bPlus = b.match(/\+/).index;
    console.log(aPlus,bPlus)
    var a1 = a.substring(0,aPlus),
        a2 = a.substring(aPlus+1,a.length-1),
        b1 = b.substring(0,bPlus),
        b2 = b.substring(bPlus+1,b.length-1);
    console.log(a1,a2,b1,b2)
    return (a1*b1-a2*b2)+"+"+(a2*b1+a1*b2)+"i";
};

/*
    通过+号的位置确认两个系数
*/