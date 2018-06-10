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
var findBottomLeftValue = function(root) {
    var res = [root.val,0];//res[0]保存最左值, res[1]保存最深层
    inorder(root,0);
    return res[0];
    
    function inorder(node,level){
        if(!node) return;
        inorder(node.left,level+1);
        if(level>res[1]){
            res[0] = node.val;
            res[1] = level;
        }
        inorder(node.right,level+1);
    }
};