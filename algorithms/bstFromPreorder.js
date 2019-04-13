/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (preorder.length === 0) return null;
    
    const nodeVal = preorder[0];
    const left = preorder.filter(val => val < nodeVal);
    const right = preorder.filter(val => val > nodeVal);
    
    const root = new TreeNode(nodeVal);
    root.left = bstFromPreorder(left);
    root.right = bstFromPreorder(right)
    
    return root;
};