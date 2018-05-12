/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var len = s.length;
    if(len<=k){
        return s.split("").reverse().join("");
    }else if(len>k && len<=2*k){
        var reveStr = s.slice(0,k), postStr = s.slice(k,len);
        return reverseStr(reveStr,k) + postStr;
    }else{
        var reveStr = s.slice(0,k), preStr = s.slice(k,2*k), postStr = s.slice(2*k,len);
        return reverseStr(reveStr,k) + preStr + reverseStr(postStr,k);
    }
    
};