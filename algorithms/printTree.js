/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    var h = getHeight(root), w = Math.pow(2,h)-1, res = [];
    for(var i=0;i<h;i++){
        res.push(new Array(width).fill(""));
    }
    preorder(root,0,0,w);
    return res;
    
    function getHeight(node){
        if(!node) return 0;
        return Math.max(getHeight(node.left),getHeight(node.right))+1;
    }
    
    function preorder(node,level,left,right){
        if(!node) return;
        var curposition = Math.floor((left+right)/2);
        res[level][curposition] = node.val +"";
        preorder(node.left,level+1,left,curposition-1);
        preorder(node.right,level+1,curposition+1,right)
    }
};

/*
    数组的宽度 = 2^h-1 ( h为树的高 )
    每个节点 的 行坐标 等于 当前的层数
    每个节点 的 列坐标 与 父节点的坐标和位于根节点的左右子树 有关
    
    数组初始化 : res.push(new Array(width).fill(""));
*/