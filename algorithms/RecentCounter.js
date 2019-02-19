
var RecentCounter = function() {
    this.connect = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.connect.push(t);
    
    while (true) {
        if (t - this.connect[0] <= 3000) break;
           
        this.connect.shift();
    }
    
    return this.connect.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */