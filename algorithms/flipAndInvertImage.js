/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    var r=A.length, c=A[0].length;
    
    for(var i=0;i<r;i++){
        for(var j=0;j<Math.ceil(c/2);j++){
            if(j!==c-j-1){
                A[i][c-j-1] = (A[i][c-j-1]+1)%2; 
            }
            A[i][j] = (A[i][j]+1)%2; 
            var t = A[i][j];
            A[i][j] = A[i][c-j-1];
            A[i][c-j-1] = t;
        }
    }
    return A;
};

/*
    用例:
        [[1,1,0,1],[1,0,1,1],[0,0,0,1],[0,0,0,1]]
        [[1]]
*/