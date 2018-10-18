/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.backets = {};
    this.hash = function(e){
        return e%1000;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let h = this.hash(key);
    if(this.backets[h]){
        if(!this.backets[h].includes(key)){
            this.backets[h].push(key);
        }
    }else{
        this.backets[h] = [key];
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let h = this.hash(key);
    if(this.backets[h]){
        let index = this.backets[h].indexOf(key);
        if(index !== -1){
            this.backets[h].splice(index,1);
        }
    }
};

/**
 * Returns true if this set did not already contain the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let h = this.hash(key);
    return Boolean(this.backets[h] && this.backets[h].includes(key));
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */