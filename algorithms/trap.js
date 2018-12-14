/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 2) return 0;
    let len = height.length, left = height[0], maxRight = [], right = 0, res = 0;
    
    for(let i = len - 1; i >= 0; i--){
        if(height[i] > right) {
            maxRight[i] = right = height[i];
        } else {
            maxRight[i] = right;
        }
    }



    for(let i = 1; i < len; i++) {
        if (height[i] > left) {
            left = height[i];
        } 
        res += Math.max(Math.min(left, maxRight[i]) - height[i], 0);
    }
    return res;
};

/*
    maxRight[i] 为height数组第i个位置右侧的最高值
    left 为左侧的最高值
    每个位置的存水量为Math.min(left, maxRight[i]) - height[i] 或 0
*/