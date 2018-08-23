/**
 * @param {string} s
 * @return {string}
 */
// var reverseString = function(s) {
//     return s.split("").reverse().join("");
// };


var reverseString =function(s){
    var newStr ="";
    for(var i=s.length-1;i>=0;i--){
        newStr += s[i];
    }
    return newStr;
}