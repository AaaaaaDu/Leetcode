/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    const len = points.length;
    let max = 0;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            for(let k=j+1;k<len;k++){
                max = Math.max(area(points[i],points[j],points[k]),max);
            }
        }
    }
    return max;
};

function area(a,b,c){
    return 0.5 * Math.abs(a[0]*b[1] + c[0]*a[1] + b[0]*c[1] - a[1]*b[0] - c[1]*a[0] - b[1]*c[0]);
}

/*
    已知三个点a(x1,y1),b(x2,y2),c(x3,y3)时, 三角形面积公式:
    0.5 * (x1*y2 + x2*y3 + x3*y1 - y1*x2 - y2*x3 -y3*x1)
*/