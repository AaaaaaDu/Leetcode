/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = Number.MAX_VALUE,res = 0;
    nums.forEach(function(a){
        min = Math.min(a,min);
    });
    nums.forEach(function(a){
        res += a - min;
    });
    return res;
};

/*
    我们每次需要给除了最大的数加一,
    这也就相当于给未选中的数减一
*/