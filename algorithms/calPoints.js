/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    //使用一个新数组储存得分
    var score = [],slen=0,sum=0;
    ops.forEach(function(a){
        slen = score.length;
        if(a === "+"){
            score.push((score[slen-1]-0)+(score[slen-2]-0));
        }else if(a==="C"){
            score.pop();
        }else if(a==="D"){
            score.push(score[slen-1]*2);
        }else{
            score.push(a-0);
        }
    });
    score.forEach(function(a){
        sum += a;
    })
    return sum;
};