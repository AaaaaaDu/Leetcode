/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    preorder(root);
    return res;
    
    function preorder(node){
        if(!node) return;
        res.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }
};















