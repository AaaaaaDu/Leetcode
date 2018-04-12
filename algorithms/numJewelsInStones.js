/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    S.split("").forEach(function(stone){
        if(J.indexOf(stone) !== -1)
            count++;
    })
    return count;
};
/*
    遍历S,如果在J中存在 ,count++
*/