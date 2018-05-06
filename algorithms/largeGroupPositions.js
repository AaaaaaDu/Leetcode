/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let count = 1, start = 0, cur = S[0],res = [];
    for(let i=1,len=S.length;i<len;i++){
        if(S[i] === cur){
            count++;
        }else{
            if(count>=3){
                res.push([start,i-1]);
            }
            start = i;
            count = 1;
            cur = S[i];
        }
    }
    if(S.length - start >= 3) res.push([start,S.length-1])
    return res;
};