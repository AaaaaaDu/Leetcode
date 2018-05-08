/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if(!t) return "";
    var res = t.val + "";
    preorder(t);
    return res;
    
    function preorder(node){
        if(!node.left && !node.right) return;
        if(!node.left){
            res += "()(" + node.right.val;
            preorder(node.right);
            res += ")";
        }else if(!node.right){
            res += "(" + node.left.val;
            preorder(node.left);
            res += ")"
        }else{
            res += "(" + node.left.val;
            preorder(node.left);
            res += ")(" + node.right.val;
            preorder(node.right);
            res += ")";
        }
    }
};