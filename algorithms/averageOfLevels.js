/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var obj = {}, level = -1,res=[];
    inorder(root,obj,level);
    for(a in obj){
        res.push(obj[a].val/obj[a].count);
    }
    return res;
};
function inorder(node,obj,level){
    if(!node) return;
    level++;
    inorder(node.left,obj,level);
    if(obj[level]){
        obj[level].val += node.val;
        obj[level].count++;
    }else{
        obj[level] = {
            val:node.val,
            count:1
        }
    }
    inorder(node.right,obj,level);
}