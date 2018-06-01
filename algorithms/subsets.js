/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return findSub(nums.length-1)
    
    function findSub(len){
        if(len===0) return [[],[nums[0]]];
        var res = findSub(len-1).slice();
        var l = res.length;  
        for(var i=0;i<l;i++){
            var arr = res[i].slice();
            arr.push(nums[len]);
            res.push(arr);
        }
        return res;
    }
};

/*
    k个数的所有子集就是k-1个数的所有子集 + k-1个数的所有子集再添加k
*/