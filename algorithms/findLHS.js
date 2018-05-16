/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var max = 0,count = [],index=0;
    nums.sort(function(a,b){
        return a-b;
    });
    count[index] = [nums[0],1];
    for(var i=1,len=nums.length;i<len;i++){
        if(nums[i]===nums[i-1]){
            count[index][1]++;
        }else{
            index++;
            count[index] = [nums[i],1];
        }
    }
    for(var i=1,len=count.length;i<len;i++){
        if(count[i][0]-count[i-1][0]===1){
            max=Math.max(count[i][1]+count[i-1][1],max);
        }
    }
    return max;

};

/*
    构造一个count数组,用于保存每个数字的值及其出现次数,每个元素为[数字的值,出现次数]
    注意: 需要先将nums排序, 确保count数组的元素按顺序排序
    例如:
        nums = [1,3,2,2,5,2,3,7]
        count = [ [ 1, 1 ], [ 2, 3 ], [ 3, 2 ], [ 5, 1 ], [ 7, 1 ] ]
*/
/*
    用例:
        [1,3,2,2,5,2,3,7]
        [2,3,7,7,7]
        [-1,0,-1,0,-1,0,-1]
*/