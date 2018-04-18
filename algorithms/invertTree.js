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
1、交换根节点的左右子树。
2、对左右子树分别执行递归反转 。
*/