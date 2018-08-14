/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    return removeNode(root, key);
    
    function removeNode(node, val){
        if(!node) return null;
        
        if(node.val > val){
            node.left = removeNode(node.left, val);
            return node;
            
        }else if(node.val < val ){
            node.right = removeNode(node.right, val);
            return node;
            
        }else{
            if(!node.left && !node.right){
                return null;
            }
            if(!node.left){
                node = node.right;
                return node;
            }
            if(!node.right){
                node = node.left;
                return node;
            }
            
            node.val = findMin(node.right);
            node.right = removeNode(node.right, node.val);
            return node;
        }
    }
    function findMin(node){
        if(node.left){
            while(node.left.left){
                node = node.left;
            }
            node = node.left;
        }
        return node.val;
    }
};













