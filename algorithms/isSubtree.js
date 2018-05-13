/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(!s) return false;
    
    return sameTree(s,t) || isSubtree(s.left,t) || isSubtree(s.right,t);

};

function sameTree(s,t){
    if(!s && !t) return true;
    if(!s || !t) return false;
    return ((s.val===t.val)?true:false) && sameTree(s.left,t.left) && sameTree(s.right,t.right);
}

