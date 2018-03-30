/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null) return true;
    return Symmetric(root.left,root.right);
};
function Symmetric(r,l){
    if(!r && !l) return true;
    if(!r || !l) return false;
    //对称条件:节点值相等 && 左边节点右子树 === 右节点左子树 && 左边节点左子树 === 右节点右子树
    return (r.val === l.val)&&Symmetric(r.left,l.right)&&Symmetric(r.right,l.left);
}