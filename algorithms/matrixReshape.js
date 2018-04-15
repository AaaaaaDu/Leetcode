/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    //判断是否可以转换
    if(nums.length *nums[0].length !== r*c) return nums;
    var res = [],arr = [];
    for(i=0,len=nums.length;i<len;i++){
        var arrlen = nums[i].length;
        for(var j=0;j<arrlen;j++){
            if(arr.length === c){
                res.push(arr);
                arr = [];
            }
            arr.push(nums[i][j])
        }
        if(arr.length === c){
            res.push(arr);
            arr = [];
        }
    }
    return res;
};