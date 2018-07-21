/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.obj = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.obj[key] = val;
    console.log(this.obj)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    var sum = 0;
    for(var item in this.obj){
        if(item.indexOf(prefix) === 0){
            sum += this.obj[item];
        }
    }
    return sum;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */