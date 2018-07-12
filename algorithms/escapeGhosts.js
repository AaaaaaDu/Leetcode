/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    var step = Math.abs(target[0]) + Math.abs(target[1]);
    for(var i=0, len=ghosts.length;i<len;i++){
        if(step >= Math.abs(target[0] - ghosts[i][0]) + Math.abs(target[1] - ghosts[i][1]))
            return false; 
    }
    return true;
};

/*
    你到终点的步数大于等于任意阻碍者到终点的步数就是false
*/