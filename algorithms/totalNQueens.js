/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var arr = [],count = 0;//arr保存每列皇后所在列数,count解法的计数
    find(0);
    return count;
    
    function find(c){//通过递归横向迭代
        if(c===n){
            count++;
            return;
        }
        for(var r=0;r<n;r++){//纵向迭代
            if(isSafe(r,c)){
                arr.push(r);
                find(c+1);
                arr.pop();
            }
        }
    }
    
    function isSafe(r,c){
        for(var i=0,len=arr.length;i<len;i++){
            if(arr[i] === r) return false;//当前列有皇后
            if (Math.abs(c - i) == Math.abs(r - arr[i])) return false;//该点的对角线上有皇后
        }
        return true;
    }
};