/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map();
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.get(val) === undefined) {
        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);
        
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let len = this.arr.length - 1, index = this.map.get(val);
    if (index !== undefined) {
        this.map.delete(val);
        if (index !== len) {
            [this.arr[index], this.arr[len]] = [this.arr[len], this.arr[index]];
            this.map.set(this.arr[index], index);
        }
        this.arr.pop();

        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.ceil(Math.random() * this.arr.length) - 1;
    
    return this.arr[index]; 
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */