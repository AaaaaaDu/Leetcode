/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let g = {}, inDegree = new Array(numCourses).fill(0), queue = [], res = [];
    // 构建图对象和入度数组
    prerequisites.forEach(val => {
        inDegree[val[0]]++;
        g[val[1]] ? g[val[1]].push(val[0]) : (g[val[1]] = [val[0]]);
    });
    // 将入度为零的节点加入队列
    inDegree.forEach((val, index) => {
        if (val === 0) queue.push(index);
    });
    // 深度优先搜索
     while (queue.length) {
        let cur = queue.pop();
         res.push(cur)
        
        if (!g[cur]) continue;
        
        g[cur].forEach(val => {
            inDegree[val]--;
            if (inDegree[val] === 0) queue.push(val);
        });
    }
    return res.length === numCourses ? res : [];
};