/**
 * Initialize your data structure here.
 */
var AllOne = function() {
    this.map = {};
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    this.map[key] = this.map[key] ? this.map[key] + 1 : 1;
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    this.map[key] -= 1;
	if (!this.map[key]) delete this.map[key];
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    const arr = Object.entries(this.map);
	if (!arr.length) return '';
	arr.sort(([key1, val1], [key2, val2]) => {
		return val1 - val2;
	})
	return arr[arr.length - 1][0];
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    const arr = Object.entries(this.map);
	if (!arr.length) return '';
	arr.sort(([key1, val1], [key2, val2]) => {
		return val1 - val2;
	})
	return arr[0][0];
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */