/**
 * @param {number[]} nums
 * @return {number[]}
 */

function findDuplicates(nums) {
    var res = [], index, cur;
    for(var i=0,len=nums.length;i<len;i++){
        cur = nums[i];
        index = Math.abs(cur) - 1;
        if(nums[index] < 0){
            res.push(index+1);
        }else{
            nums[index] *= -1;
        }
    }
    return res;
}

/*
    由于数组元素的取值为: 1 ≤ a[i] ≤ n, 所以可以采用该算法
*/