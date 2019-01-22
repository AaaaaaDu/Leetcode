/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) return [];
    
    let len = nums.length, res = [], queue = [];
    
    for (let i = 0; i < len; i++) {
        // 如果最大值的索引不在滑动窗口中, 则舍弃
        if (queue.length !== 0 && queue[queue.length - 1] === i - k) queue.pop();
        // 将队列中比新数小的值舍弃, 将新数放在队列最后
        while (queue.length !== 0 && nums[queue[0]] <= nums[i]) {
            queue.shift();
        }
        queue.unshift(i);
        // 将最大值放到结果数组中
        if((i + 1) >= k) res.push(nums[queue[queue.length - 1]]);
        
    }
    
    return res;
};
