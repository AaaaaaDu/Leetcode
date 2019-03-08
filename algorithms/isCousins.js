/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const queue = [root];
    
    while (queue.length) {
        const len = queue.length;
        let xy = {};
        
        xy[x] = {num: 0, parent: null};
        xy[y] = {num: 0, parent: null};
        
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            
            if (node.left && (node.left.val === x || node.left.val === y)) {
                xy[node.left.val].num++;
                xy[node.left.val].parent = node;
            }
            if (node.right && (node.right.val === x || node.right.val === y)) {
                xy[node.right.val].num++;
                xy[node.right.val].parent = node;
            }
            
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // console.log(xy)
        if (xy[x].num > 1 && xy[y].num > 1) return true;
        if (xy[x].parent && xy[y].parent && xy[x].parent !== xy[y].parent) return true;
    }
    
    return false;
};