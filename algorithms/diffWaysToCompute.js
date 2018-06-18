/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    var res = [];
    var len = input.length;
    for(var i=0;i<len;i++){
        if(input[i]==="+" || input[i]==="-" || input[i]==="*"){
            var left = diffWaysToCompute(input.substring(0,i));
            var right = diffWaysToCompute(input.substring(i+1));
            console.log(left,right)
            for(var j = 0; j < left.length; j ++){
                for(var k = 0; k < right.length; k ++){
                    if(input[i] == '+')
                        res.push(left[j] + right[k]);
                    else if(input[i] == '-')
                        res.push(left[j] - right[k]);
                    else
                        res.push(left[j] * right[k]);
                }
            }
        }
    }
    if (res.length == 0) {
        res.push(input-0);
    }
    return res;
};