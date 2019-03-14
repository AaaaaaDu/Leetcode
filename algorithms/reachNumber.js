/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    target = Math.abs(target);
    
    let sum = 0, step = 0, dis = 0;
    
    while (sum < target) {
        step++;
        sum += step;
    }
    
    dis = sum - target;
    
    if (dis % 2) {
        if (step % 2) {
            return step + 2;
        } else {
            return step + 1;
        }
    } else {
        return step;
    }
};