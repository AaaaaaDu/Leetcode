/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let second = Number.MAX_VALUE,val = root.val;
    preorder(root);
    return second===Number.MAX_VALUE?-1:second;
    
    function preorder(node){
        if(!node) return;
        if(node.val<second && node.val!==val){
            second = node.val; 
        }
        preorder(node.left);
        preorder(node.right);
    }
};
/*
    由给定的条件，可知根节点肯定是值最小的节点，所以这个问题就是找子树中与根节点不相等的最小值
*/