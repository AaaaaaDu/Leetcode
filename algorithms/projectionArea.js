/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let xy = 0, xz = [], yz = new Array(grid.length).fill(0);
    
    grid.forEach((arr, x) => {
        let xMax = 0;
        
        arr.forEach((val, y) => {
            if (val === 0) return;
            
            xy++;
            xMax = Math.max(xMax, val);
            yz[y] = Math.max(yz[y], val);
        });
        
        xy += xMax;
    });
    
    return xy + yz.reduce((sum, val) => sum += val);
};