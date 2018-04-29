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
var isBalanced = function(root) {
    if(!root) return true;
    if(Math.abs(depth(root.left)-depth(root.right))>1){
        return false;
    }
    return true && isBalanced(root.left) && isBalanced(root.right);
};

var depth = function(node){
    if(!node) return 0;
    return 1 + Math.max(depth(node.left),depth(node.right));
}