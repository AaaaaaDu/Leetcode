/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    cut(root);
    return root;
    
    
    function cut(node){
        if(!node) return 0;
        if(cut(node.left)){
            node.left = null;
        }
        if(cut(node.right)){
            node.right = null;
        }
        if(!node.left && !node.right && !node.val){
            return 1;
        }else{
            return 0;
        }
    }
};