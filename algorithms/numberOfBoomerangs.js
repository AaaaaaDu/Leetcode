/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var res = 0, Boomerang = {};
    for(var i=0,len=points.length;i<len;i++){
        var distance = {};
        for(var j=0;j<len;j++){
            var x = points[i][0] - points[j][0];
            var y = points[i][1] - points[j][1];
            distance[x*x+y*y] = distance[x*x+y*y]+1 || 1;
        }
        for(a in distance){
            if(distance.hasOwnProperty(a))
                res += distance[a] * (distance[a]-1);
        }
    }
    return res;
};
/*
    1. 遍历数组
    2. 找到每个点和其他所有点的距离, 并记下数量
    3. 如果有n个点和a距离相等，那么回旋镖的组合为n(n-1)个
*/