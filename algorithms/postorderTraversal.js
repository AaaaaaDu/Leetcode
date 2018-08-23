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
var postorderTraversal = function(root) {
    let res = [];
    postorder(root);
    return res;
    
    function postorder(node){
        if(!node) return;
        
        postorder(node.left);
        postorder(node.right);
        res.push(node.val);
    }
};