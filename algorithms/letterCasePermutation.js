/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    var res = [];
    transform(S.split(""),0);
    return res;
    
    function transform(a, i){
        if(i > a.length){
            res.push(a.join(""));
            return;
        }
        if(a[i] >= 'a' && a[i] <= 'z'){
            a[i] = a[i].toUpperCase();
            transform(a,i+1);
            a[i] = a[i].toLowerCase();
        }
        if(a[i] >= 'A' && a[i] <= 'Z'){
            a[i] = a[i].toLowerCase();
            transform(a,i+1);
            a[i] = a[i].toUpperCase();
        }
        transform(a,i+1);
    }
};