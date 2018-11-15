/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = {}, max = 0, same = 0;
    
    tasks.forEach(val => map[val] = map[val] + 1 || 1);
    
    let value = Object.values(map).sort((a, b) => b - a).filter((val, index, arr) => val === arr[0]);

    return Math.max((value[0] - 1) * (n + 1) + value.length, tasks.length);
};
/*
    最终需要最少的任务时间：（最多任务数-1）*（n + 1） + （相同最多任务的任务个数）
*/