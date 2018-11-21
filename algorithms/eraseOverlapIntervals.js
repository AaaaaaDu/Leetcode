/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    let count = 1, len = intervals.length, last = 0;
    // 按end升序
    intervals.sort((a, b) => a.end - b.end);
    
    for(let i = 1; i < len; i++) {
        if (intervals[last].end <= intervals[i].start) {
            count++;
            last = i;
        }
    }
    
    return len - count;
};
/*
    这个问题可以转换为在相同时间安排更多的任务(贪心算法)
    count为选择的任务数, 每次选择结束时间早且不重叠的任务, 即可安排最多的任务
    安排的任务最多, 去掉的任务就最少
*/