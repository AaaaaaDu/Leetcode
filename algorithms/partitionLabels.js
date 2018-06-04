/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    var lastIndex = 0, preIndex = -1, res = [];
    for(var i=0,len=S.length;i<len;i++){
        var index = S.lastIndexOf(S[i]);
        lastIndex = Math.max(lastIndex,index);
        if(i===lastIndex){
            res.push(lastIndex-preIndex);
            preIndex = lastIndex;
        }
    }
    return res;
};