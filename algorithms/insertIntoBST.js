/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root.val > val){
        if(!root.left){
            root.left = new TreeNode(val);
            return;
        }else{
            insertIntoBST(root.left, val);
        }
    }else if(root.val < val){
        if(!root.right){
            root.right = new TreeNode(val);
        }else{
            insertIntoBST(root.right, val);
        }
    }
    return root;
};