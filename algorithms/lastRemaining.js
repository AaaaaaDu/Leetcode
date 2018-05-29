/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    var head = 1;
    var step = 1;
    var isLeft = true;
    while(n>1){
        if(isLeft || n%2===1){
            head = head + step;
        }
        n  = Math.floor(n/2);
        step = step * 2;
        isLeft = !isLeft;
    }
    return head;
};
/*
    步长每次 乘 2(第一次为2,第二次为4....)
    元素个数每次 除以 2 
    从左侧开始的头部元素都是上一次的头部元素加上步长
    从右侧开始
    在剩余元素是奇数个时，头部元素为上次迭代的头部元素加步长
    不然左侧头部不变
*/