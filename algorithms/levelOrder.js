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
var levelOrder = function(root) {
    if(!root) return [];
    var nodes=[],count = -1;
    inorder(root,nodes,count);
    return nodes;
};
function inorder(r,n,count){
    if(!r) return;
    count++;
    inorder(r.left,n,count);
    if(n[count] === undefined){
        n[count] = new Array();
        n[count].push(r.val);
    }else{
        n[count].push(r.val);
    }
    inorder(r.right,n,count);
}
//使用中序遍历 ,并用count记录层数