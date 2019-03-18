/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let min, alen;
    
    const map = deck.reduce((obj, num) => {
        obj[num] = obj[num] + 1 || 1;
        
        return obj;
    }, {});
    
    const arr = Object.values(map);
    min = Math.min.apply(this, arr);
    alen = arr.length;
    
    if (min === 1) return false;

    for (let i = 2; i <= min; i++) {          
        let flag = true;   

        for (let j = 0; j < alen; j++) {   
            if (arr[j] % i !== 0) flag = false; 
        }

        if (flag) return true;
    } 
    
    return false;
};