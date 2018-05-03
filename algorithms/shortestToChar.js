/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var res = [],minPosition=S.indexOf(C);
    for(var i=0,len=S.length;i<len;i++){
        if(Math.abs(S.indexOf(C,i)-i) < Math.abs(minPosition-i)){
            minPosition = S.indexOf(C,i);
        }
        res.push(Math.abs(minPosition-i));
    }
    return res;
};