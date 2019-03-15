/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let len = seats.length, prev = -1, next = seats.indexOf(1), max = 0;
    
    for (let i = 0; i < len; i++) {
        if (seats[i]) {
            prev = next;
            next = seats.indexOf(1, i + 1);
        } else {
            let dis1 = prev === -1 ? (len + 1) : (i - prev),
                dis2 = next === -1 ? (len + 1) : (next - i),
                min = Math.min(dis1, dis2);
            
            max = Math.max(min, max);
        }
    }
    
    return max;
};