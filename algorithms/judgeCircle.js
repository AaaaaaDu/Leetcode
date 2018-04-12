/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var u = 0, l = 0,r =0, d=0;
    
    if(moves.match(/U/g)){
        var u = moves.match(/U/g).length
    }
    if(moves.match(/L/g)){
        var l = moves.match(/L/g).length
    }
    if(moves.match(/R/g)){
        var r = moves.match(/R/g).length
    }
    if(moves.match(/D/g)){
        var d = moves.match(/D/g).length
    }
    if(u === d && r === l) return true;
    return false;

};
/*
    只要R === L && D === U, 就算回到原地
*/