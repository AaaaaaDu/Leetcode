/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root], res = [], level = 0;
    
    while (queue.length) {
        let len = queue.length;
        res[level] = []
        
        for (let i = 0; i < len; i++) {
            let cur = queue.shift();
            res[level].push(cur.val);
            queue = queue.concat(cur.children);
        }
        
        level++;
    }
    
    return res;
}; 