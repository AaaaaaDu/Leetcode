/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [], i = 0;
    while(i<rowIndex+1){
        var cur = new Array(i+1).fill(1);
        for(var j=1;j<res.length;j++){
            cur[j] = res[j] + res[j-1];
        } 
        res = cur;
        i++
    }
    return res;
};