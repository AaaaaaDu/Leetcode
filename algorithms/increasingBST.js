/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let res, cur;
    
    inorder(root);
    
    return res;
    
    function inorder (node) {
        if (!node) return;
        
        inorder(node.left);
        
        if (cur) {
            cur.right = new TreeNode(node.val);
            cur = cur.right;
        } else {
            res = cur = new TreeNode(node.val);
        }
        
        inorder(node.right);
    }
};