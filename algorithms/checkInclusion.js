/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let len1 = s1.length, len2 = s2.length, map1 = {}, map2 = {};
    
    for(let i = 0; i < len1; i++) {
        map1[s1[i]] = map1[s1[i]] + 1 || 1;
    }

    for(let i = 0; i < len2; i++) {
        if (i >= len1) {
            map2[s2[i - len1]]--;
            
            if (map2[s2[i - len1]] === 0) {
                delete map2[s2[i - len1]];
            }
        }
        
        map2[s2[i]] = map2[s2[i]] + 1 || 1;
        
        // 要保证两个map的长度相等
        if(i >= len1 - 1 && equals(map1, map2)) {
            return true;
        }
    }
    
    return false;
    
    function equals(obj1, obj2) {
        let sign = true;
        
        Object.keys(obj1).forEach(key => {
            // console.log(key, obj1[key], obj2[key], obj1[key] !== obj2[key])
            if (obj1[key] !== obj2[key]) sign = false;
        });
        
        return sign;
    }
};