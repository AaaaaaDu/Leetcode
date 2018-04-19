/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var n=n.toString(2);
    for(var i=1,len=n.length;i<len;i++){
        if(n[i]===n[i-1]) return false;
    }
    return true;
};