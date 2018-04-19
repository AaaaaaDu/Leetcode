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
var invertTree = function(root) {
    if(root === null) return null;  
    var n = new TreeNode(0);
    n = root.left;  
    root.left = invertTree(root.right);  
    root.right = invertTree(n);  
    return root;  
};
/*
    递归的将每个节点的左右子树交换
*/