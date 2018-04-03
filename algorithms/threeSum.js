/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    var res = [];
    for(var i=0,len=nums.length;i<len;i++){
        if(nums[i] > 0) break;
        if(nums[i] === nums[i-1]) continue;
        var k = i+1,j = len-1;
        var tag = 0-nums[i];
        while(k<j){
            if(nums[k] + nums[j] === tag){
                res.push([nums[i],nums[k],nums[j]]);
                while(k<j && nums[k] === nums[k+1]) k++;
                while(k<j && nums[j] === nums[j-1]) j--;
                k++;
                j--;
            }else if (nums[k] + nums[j] < tag) ++k;
            else --j;
        }
    }
    return res
}
/*
    我们还是要首先对原数组进行排序，然后开始遍历排序后的数组，这里注意不是遍历到最后一个停止，而是到倒数第三个就可以了，然     
    后我们还要加上重复就跳过的处理，对于遍历到的数，我们用0减去这个数得到一个sum，我们只需要再之后找到两个数之和等于sum即可，
    这样一来问题又转化为了求two sum，这时候我们一次扫描，找到了等于sum的两数后，加上当前遍历到的数字，按顺序存入结果中即可，
    然后还要注意跳过重复数字
*/