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
var inorderTraversal = function(root) {
    if(!root) return [];
    var n = [];
    return inorder(root,n);
};
function inorder(r,n){
    if(!r) return;
    inorder(r.left,n);
    n.push(r.val);
    inorder(r.right,n);
    return n;
}