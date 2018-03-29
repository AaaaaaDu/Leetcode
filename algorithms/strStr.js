/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //return haystack.search(needle); 84ms
    
    return haystack.indexOf(needle);//76ms
};