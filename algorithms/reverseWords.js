/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr = s.split(" ");
    var res = [];
    for(var i=0,len=arr.length;i<len;i++){
        res.push(reverseString(arr[i]));
    }
    return res.join(" ");
};
function reverseString(s){
    var res = "";
    for(var i=s.length-1;i>=0;i--){
        res += s[i];
    }
    return res;
}