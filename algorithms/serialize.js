/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let s = "";
    inorder(root);
    console.log(s)
    return s;
    
    function inorder(node){
        if(!node) {
            s += "x";
            return;
        }
        s += node.val + "!";
        inorder(node.left);
        inorder(node.right);
    }
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "x") return [];
    let first = data.substring(0, data.indexOf("!"))-0, root = new TreeNode(first);
    data = data.substring(data.indexOf("!") + 1, data.length)
    console.log(data)
    create(root);
    return root;
    
    function create(node){
        if(data[0] === "x"){
            data = data.substring(1, data.length);
        }else{
            let left = data.substring(0, data.indexOf("!")) - 0;
            data = data.substring(data.indexOf("!") + 1, data.length);
            node.left = new TreeNode(left);
            create(node.left);
        }
        if(data[0] === "x"){
            data = data.substring(1, data.length);
        }else{
            let right = data.substring(0, data.indexOf("!")) - 0;
            data = data.substring(data.indexOf("!") + 1, data.length);
            node.right = new TreeNode(right);
            create(node.right);
        }
    }
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */