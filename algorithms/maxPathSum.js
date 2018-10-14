/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Number.MAX_VALUE;
    help(root);
    return max;
    
    function help(node) {
        if(!node) return 0;
        
        let left = help(node.left);
        let right = help(node.right);
        
        max = Math.max(max, left + right + node.val);
        return Math.max(0, Math.max(left, right) + node.val);
    }
    
};