/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var n = [], a = {}, sign = false;
    inorder(root);
    n.forEach(function(item){
        if(a.hasOwnProperty(k-item)) sign = true;
        a[item] = 1;
    });
    return sign;
    
    
    function inorder(node){
        if(!node) return;
        inorder(node.left);
        n.push(node.val);
        inorder(node.right);
    }
};