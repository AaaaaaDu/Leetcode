/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    if(!root) return [];
    
    let map = {}, res = [];
    
    find(root);
    
    return res; 
    
    function find(node) {
        if(!node) return "#";
        
        let str = node.val + find(node.left) + find(node.right);
        if (map[str]) {
            if (map[str] === 1) {
                res.push(node);
            }
            map[str]++;
        } else {
            map[str] = 1;
        }
        return str;
    }
};