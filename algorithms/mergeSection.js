/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return intervals;
    
    let res = [], len = intervals.length;
    
    intervals.sort((a, b) => a.start - b.start);
    res[0] = intervals[0];
    
    for(let i = 1; i < len; i++) {
        if (intervals[i].start <= intervals[i - 1].end) {
            let last = res.length - 1, max = Math.max(intervals[i].end, res[last].end);
            res[last].end = max;
            intervals[i].end = max;
        } else {
            res.push(intervals[i]);
        }
    }
    
    return res;
};

/*
    [[2,3],[4,5],[6,7],[8,9],[1,10]]
    [[1,4], [2,3]]
*/