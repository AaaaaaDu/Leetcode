/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    var path = "";
    combination(n,n,path,res);
    return res;
};
function combination(left,right,path,res){
    if(left===0 && right === 0){
        res.push(path);
        return;
    }
    if(left!==0){
        combination(left-1,right,path+"(",res);
    }
    if(right!==0 && left<right){
        combination(left,right-1,path+")",res);
    }
}

/*
    left表示左括号的剩余数量 right表示右括号的剩余数量
    1.当left===0 && right===0,表示找到一种组合
    2.当left!==0 ,可以放左括号
    3.当right!==0 && left>right, 可放右括号
*/