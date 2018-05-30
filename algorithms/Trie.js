/**
 * Initialize your data structure here.
 */
var TrieNode = function(){
    // this.isWord = false;
    // this.charArr = [];
    this.isWord = false;
    this.charArr = [];
}

var Trie = function() {
    // this.root = new TrieNode();
    // //用于就是字母的索引
    // this.initIndex = "a".charCodeAt(0);
    this.initIndex = "a".charCodeAt(0);
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var node = this.root;
    for(var i=0,len=word.length;i<len;i++){
        var index = word.charCodeAt(i) - this.initIndex;
        if(!node.charArr[index]){
            node.charArr[index] = new TrieNode();
        }
        node = node.charArr[index];
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var node = this.root;
    for(var i=0,len=word.length;i<len;i++){
        var index = word.charCodeAt(i) - this.initIndex;
        if (!node.charArr[index]) return false;
        node = node.charArr[index];
    }
    return node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var node = this.root;
    for(var i=0,len=prefix.length;i<len;i++){
        var index = prefix.charCodeAt(i) - this.initIndex;
        if (!node.charArr[index]) return false;
        node = node.charArr[index];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */