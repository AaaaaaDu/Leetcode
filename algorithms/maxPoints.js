/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {   
    let len = points.length, res = 0;
    
    points.forEach((val, index) => {
        let map = {}, repeat = 1, max = 0;
        
        for(let i = index + 1; i < len; i++) {
            if (points[i].x === val.x && points[i].y === val.y) {
                repeat++;
                continue;
            }
            
            if (points[i].x === val.x) {
                map['xSame'] = map['xSame'] + 1 || 1;
            } else {
                let y = points[i].y - val.y, x = points[i].x - val.x, p = gcd(x, y), k = x/p + "/" + y/p;

                map[k] = map[k] + 1 || 1;
            }
        }
        
        Object.values(map).forEach(value => {
            max = Math.max(max, value);
        });
        
        res = Math.max(max + repeat, res);
    });
    
    return res;
    
    function gcd(i,j){
        if(j == 0)
            return i;
        else
            return gcd(j, i % j);

    }
};

/*
    1. x, y坐标相同的点
    2. x坐标相同的点
    3. 斜率为无限小数时, 精度会缺失, 所以要以分数的形式保存键值
*/