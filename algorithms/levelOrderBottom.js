/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var level=0,res=[]; 
    inorder(root,res,level);
    return res.reverse();
    
    function inorder(node,arr,level){
        if(!node) return;
        level++;
        inorder(node.left,arr,level);
        if(!arr[level-1]){
            arr[level-1] = [];
        }
        arr[level-1].push(node.val);
        inorder(node.right,arr,level);
    }
};
