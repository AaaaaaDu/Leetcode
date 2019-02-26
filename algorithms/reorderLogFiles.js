/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const s = logs.filter((val) => {
        const index = val.indexOf(" ") + 1;
        return val[index] < '0' || val[index] > '9'
    });
    const num = logs.filter((val) => {
        const index = val.indexOf(" ") + 1;
        return val[index] >= '0' && val[index] <= '9'
    });

    s.sort((a, b) => {
        let aStr = help(a), bStr = help(b) , i = 0;
        
        return aStr > bStr ? 1 : -1
    });
    
    return s.concat(num);
    
    
    function help (s) {
        const index = s.indexOf(" ") + 1;
        return s.slice(index);
    }
};