/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var minIndex = Number.MAX_VALUE, res = [];
    for(var i=0,len=list1.length;i<len;i++){
        var index = list2.indexOf(list1[i]);
        if(index === -1) continue;
        if(minIndex > index+i){
            res=[];
            res.push(list1[i]);
            minIndex = index+i;
        }else if(minIndex === i+index){
            res.push(list1[i]);
        }
    }
    return res;
};