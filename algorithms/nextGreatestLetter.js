/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    letters.sort();
    for (var i in letters) {
        if (letters[i] > target) {
            return letters[i];
        }
    }
    return letters[0]; 
    
};