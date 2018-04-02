/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    var n = [];
    for(var i=1;i<=numRows;i++){
        n.push([]);
        for(var j=0;j<i;j++){
            if(j===0 || j===i-1){
                n[i-1].push(1);
            }else{
                var t = n[i-2][j-1] + n[i-2][j];
                n[i-1].push(t);
            }
        }
    }
    return n;
};