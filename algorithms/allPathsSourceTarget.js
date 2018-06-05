/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var res = [],len=graph.length;
    find([0],0);
    return res;
    
    function find(arr,index){
        if(index === len-1){
            res.push(arr.concat());
            return;
        }
        if(graph[index].length === 1){
            arr.push(graph[index][0]);
            find(arr,graph[index][0]);
            arr.pop();
        }else{
            for(var j=0;j<graph[index].length;j++){
                arr.push(graph[index][j]);
                find(arr,graph[index][j]);
                arr.pop();
            }
        }
    }
    
};