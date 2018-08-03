/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return;
    let left = root.left, right = root.right;
    root.left = null;
    root.right = null;
    helper(root, left, right);
    
    
    function helper(node, left, right){
        if(left){
            node.right = new TreeNode(left.val);
            node = node.right;
            helper(node, left.left, left.right);
        }
        while(node.right !== null){
            node = node.right;
        }
        if(right){
            node.right = new TreeNode(right.val);
            node = node.right;                        
            node = helper(node, right.left, right.right);
        }   
    }

};