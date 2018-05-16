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
var findMode = function(root) {
    var arr = [],res = {},max = 0, result = [];
    inorder(root); 
    arr.forEach(function(a){
        res[a] = res[a]+1 || 1;
    })
    for(var a in res){
        if(res[a] > max){
            max = res[a];
            result = [];
            result.push(a-0);
        }else if(res[a] === max){
            result.push(a-0);
        }
    }
    return result;
    
    function inorder(node){
        if(!node) return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }
};


/*
    [1,null,2]
    []
    [1,null,2,2]
*/