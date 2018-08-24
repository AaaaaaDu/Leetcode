/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var obj={
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"],
    }
    var len = digits.length;
    if (len === 0) return [];
    var arrays = new Array(len);
    for (var i = 0; i < len; i++) {
        arrays[i] = obj[digits[i]];
    }
    return matching(arrays)
};
function matching(arr){
    if(arr.length === 1) return arr[0];
    var result = [];
    var rest = matching(arr.splice(1));
    for(var i=0;i<arr[0].length;i++){
        for(var j=0;j<rest.length;j++){
            result.push(arr[0][i]+rest[j]);
        }
    }
    return result;
} 