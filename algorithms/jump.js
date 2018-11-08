/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let times = 0, reached = 0, max = 0, len = nums.length;
    
    for(let i = 0; i < len; i++){
        if (reached < i) {
            times++;
            reached = max;
        }
        max = Math.max(max, i + nums[i]);
    }
    return times;

};

/*
    reached:从A[0]进行times次跳跃之后达到的最大范围

    max:从0~i这i+1个元素中能达到的最大范围

    当reached < i，说明times次跳跃已经不足以覆盖当前第i个元素，因此需要增加一次times，使之达到
*/