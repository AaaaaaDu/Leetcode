/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    const len = grid.length;
    
    return insert(0, 0, len);
    
    function insert(x, y, offset) {
        let key = grid[x][y];
        
        for (let i = x; i < x + offset; i++) {
            for (let j = y; j < y + offset; j++) {
                if (grid[i][j] !== key) {
                    const newOffset = Math.ceil(offset / 2),
                          topLeft = insert(x, y, newOffset),
                          topRight = insert(x, y + newOffset, newOffset),
                          bottomLeft = insert(x + newOffset, y, newOffset),
                          bottomRight = insert(x + newOffset, y + newOffset, newOffset);
                    return new Node(false,false,topLeft,topRight,bottomLeft,bottomRight);
                }
            }
        }
        
        return new Node(key, true, null, null, null, null);   
    }
};