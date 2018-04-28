/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    var res = [];
    for(var i=0,len1=M.length;i<len1;i++){
        res[i] = [];
        for(var j=0,len2=M[0].length;j<len2;j++){
            var sum=M[i][j],count=1;
            if(i>0 && j>0){
                sum += M[i-1][j-1];
                count++;
            }
            if(i>0){
                sum += M[i-1][j];
                count++;
            }
            if(i>0 && j+1<len2){
                sum += M[i-1][j+1];
                count++;
            }
            if(j>0){
                sum += M[i][j-1];
                count++;
            }
            if(j+1<len2){
                sum += M[i][j+1];
                count++;
            }
            if(i+1<len1 && j>0){
                sum += M[i+1][j-1];
                count++;
            }
            if(i+1<len1){
                sum += M[i+1][j];
                count++;
            }
            if(i+1<len1 && j+1<len2){
                sum += M[i+1][j+1];
                count++;
            }
            res[i].push(sum/count|0);
        }
    }
    return res;
};