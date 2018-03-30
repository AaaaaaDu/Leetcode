/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return sortTree(nums,0,nums.length-1)
};
function sortTree(nums,start,end){
    if(start > end)return null;
    var mid = Math.ceil((start + end)/2);
    //console.log(mid)
    var tree = new TreeNode(nums[mid]);
    tree.left = sortTree(nums,start,mid-1);
    tree.right = sortTree(nums,mid+1,end);
    return tree;
}
//利用二分法