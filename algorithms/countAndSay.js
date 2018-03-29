/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var fristN = "1", lastN = "", i=1, index=1;
    while(i !== n){
        var len = fristN.length;
        if(len === 1){
            lastN += 1+fristN;
            fristN = lastN;
            lastN = "";
            i++;
            continue;
        } 
        for(var k=0;k<len;k++){
            if(fristN[k] === fristN[k+1]){
                index++;
            }else{
                lastN += index + fristN[k];
                index = 1;
            }
        }
        fristN = lastN;
        lastN = "";
        i++;
    }
    return fristN;
};
//fristN当前行   lastN上一行   index当前索引