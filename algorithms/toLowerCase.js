/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let s = "";
    for(let i=0,len=str.length;i<len;i++){
        if(/[A-Z]/.test(str[i])){
            s += String.fromCharCode(str.charCodeAt(i) + 32);
        }else{
            s += str[i];
        }
    }
    return s;
};