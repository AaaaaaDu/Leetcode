/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    var count=-1,n=[],res = [];
    inorder(root,n,count);
    for(var i=0,len1=n.length;i<len1;i++){
        res[i] = new Array(n[i].length);
        if(i%2===0){
            for(var j=0,len2=n[i].length;j<len2;j++){
                res[i][j] = n[i][j];
            } 
        }else{
            for(var j=0,len2=n[i].length;j<len2;j++){
                res[i][j] = n[i][len2-1-j];
            } 
        }
    }
    return res;
};
function inorder(r,n,c){
    if(!r) return;
    c++;
    inorder(r.left,n,c);
    inorder(r.right,n,c);
    if(!n[c]){
        n[c] = new Array(1);
        n[c][0] =r.val;
    }else{
        n[c].push(r.val);
    }
    return n;
    
}
/*
    1.中序遍历出层次数组
    2.根据层次的奇偶，输出顺序或者逆序
*/