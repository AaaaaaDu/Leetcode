/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var arr=[],s="";
    inorder(root,s,arr);
    return arr;
};
function inorder(node,s,arr){
    if(!node) return;
    s += node.val;
    if(!node.right && !node.left){
        arr.push(s);
        return;
    }
    s+="->";
    inorder(node.left,s,arr);
    inorder(node.right,s,arr);
}

/*
    当节点没有左右子树时,路径结束
*/