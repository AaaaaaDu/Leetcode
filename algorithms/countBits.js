/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = [];
    for(var i=0;i<=num;i++){
        var s = i.toString(2);
        var arr = s.match(/1/g);
        if(arr){
            res.push(arr.length);
        }else{
            res.push(0);
        }
        
    }
    return res;
};