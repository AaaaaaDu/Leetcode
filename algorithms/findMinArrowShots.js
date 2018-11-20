/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;
    let len = points.length, res = 1, end;
    // 以起点升序排列, 若起点相等, 则以终点升序排列
    points.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    
    end = points[0][1];

    for(let i = 1; i < len; i++) {
        if (points[i][0] <= end) {
            // points[i][0] <= end 说明之前一箭能射到这个气球
            end = Math.min(end, points[i][1]);
        } else {
            res++;
            end = points[i][1];
        }
    }
    return res;
};
