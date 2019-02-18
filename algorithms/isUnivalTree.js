/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    const val = root.val;
    
    return order(root);
    
    function order(node) {
        if (!node) return true;
        
        return (node.val === val) && order(node.left) && order(node.right);
    }
};