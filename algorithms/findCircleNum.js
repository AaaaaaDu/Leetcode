/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let len = M.length, visited = new Set(), count = 0;
    
    for(let i = 0; i < len; i++) {
        if (visited.has(i)) continue;

        dfs(i);
        count++;
    }
    return count;
    
    function dfs(i) {
        let len = M.length;
        
        visited.add(i);

        for(let j = 0; j < len; j++) {
            if (!M[i][j] || visited.has(j)) continue;
            
            dfs(j);
        }
    }
};