/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var arr = [], res ={},result = [];
    for(var i=0,len=cpdomains.length;i<len;i++){
        arr.push(cpdomains[i].split(" "));
    }
    console.log(arr)
    for(i=0;i<len;i++){
        while(arr[i][1] !== ""){
            if(res[arr[i][1]]){
                res[arr[i][1]] += arr[i][0]-0;
            }else{
                res[arr[i][1]] = arr[i][0]-0;
            }
            var point = arr[i][1].search(/\./);//点的位置
            if(arr[i][1].indexOf(".") !== -1){
                arr[i][1] = arr[i][1].substr(point+1-arr[i][1].length);//截取点后面的字符串
            }else{
                arr[i][1] ="";
            }
            
        }
    }
    for(item in res){
        var con = res[item] +" "+ item;
        result.push(con);
    } 
    return result;
};