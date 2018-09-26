/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0, left = 0, right = height.length - 1;
    while(left < right){
        
        const h = Math.min(height[left], height[right]);
        res = Math.max(res, h * (right - left));
    
        height[left] < height[right] ? left++ : right--;
    }
    return res;
};