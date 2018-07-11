/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    var lenr=A.length,lenc=A[0].length,sum = 0;
    for(var i=0;i<lenr;i++){
        if(A[i][0]===0){
            for(var j=0;j<lenc;j++){
                if(A[i][j]===1){
                    A[i][j] = 0;
                }else{
                    A[i][j] = 1;
                }
            } 
        }
    }  
    for(var i=0;i<lenc;i++){
        var arr = [];
        for(var j=0;j<lenr;j++){
            arr.push(A[j][i]);
        } 
        if(!judge(arr)){
            for(var k=0;k<lenr;k++){
                if(A[k][i]===1){
                    A[k][i] = 0;
                }else{
                    A[k][i] = 1;
                }
            } 
        }
    }
    for(var i=0;i<lenr;i++){
        sum += parseInt(A[i].join(""),2);
    }
        

    
    return sum;
};

function judge(arr) {
    var count0 = 0, count1 = 0;
    arr.forEach(function(x){
        if(x===0) count0++;
        if(x===1) count1++;
    });
    if(count0 > count1) return false;
    return true;
}

