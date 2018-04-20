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
var getMinimumDifference = function(root) {
    let arr=[],res=Number.MAX_VALUE;
    inorder(root,arr);
    arr.sort(function(a,b){
        return a-b;
    })
    for(let i=1,len=arr.length;i<len;i++){
        res=Math.min(arr[i]-arr[i-1],res);
    }
    return res;
};

function inorder(node,arr){
    if(!node) return;
    inorder(node.left,arr);
    arr.push(node.val);
    inorder(node.right,arr);
}