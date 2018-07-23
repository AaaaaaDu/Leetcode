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
var findFrequentTreeSum = function(root) {
    var count = {}, max = Number.MIN_VALUE, res = [];
    sum(root);
    for(var item in count){
        if(max < count[item]){
            max = count[item];
            res = [item-0];
        }else if(max === count[item]){
            res.push(item-0);
        }
    }
    return res;
    
    
    function sum(node){
        if(!node) return;
        sum(node.left);
        sum(node.right);
        var left = node.left===null?0:node.left.val;
        var right = node.right===null?0:node.right.val;
        node.val = node.val + left + right;
        console.log(node.val)
        count[node.val] = count[node.val] + 1 || 1;
        
    }
};