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
var isValidBST = function(root) {//利用中序遍历,将树存到数组中,在进行判断
    if(root === null) return true;
    var vals = [];
    function inorder(r,n){
        if(r === null) return;
        inorder(r.left,n);
        n.push(r.val);
        inorder(r.right,n);
    }
    inorder(root,vals);
    for(var i=1,len=vals.length;i<len;i++){
        if(vals[i]<=vals[i-1]){
            return false;
        }
    }
    return true;
}