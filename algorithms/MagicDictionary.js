/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.w = [];
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.w = [];
    for(var i=0,len=dict.length;i<len;i++){
        this.w.push(dict[i]);
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    var l = word.length;
    for(var i=0,len=this.w.length;i<len;i++){
        if(this.w[i].length===l && this.w[i]!==word){
            var count = 0;
            for(var j=0;j<l;j++){
                if(this.w[i][j]!==word[j]){
                    count++;
                }
            }
            if(count===1) return true;
        }
    }
    return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */