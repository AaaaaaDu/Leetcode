/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let len = prerequisites.length, g = {}, queue = [], inDegree = new Array(numCourses).fill(0);
    // 构建图对象和入度数组
    for (let i = 0; i < len; i++) {
        g[prerequisites[i][1]] ? g[prerequisites[i][1]].push(prerequisites[i][0]) : (g[prerequisites[i][1]] = [prerequisites[i][0]]);
        inDegree[prerequisites[i][0]]++;
    }
    // 将入度为零的节点加入队列
    inDegree.forEach((val, index) => {
        if (val === 0) queue.push(index);
    });
    
    while (queue.length) {
        let cur = queue.shift();
        
        if (!g[cur]) continue;
        
        g[cur].forEach(val => {
            inDegree[val]--;
            if (inDegree[val] === 0) queue.push(val);
        });
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] !== 0) return false;
    }
    
    return true;
};