/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var digit = ["", "I", "II", "III", "IV", "V", "VI", "VII","VIII", "IX"];  
    var ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX","XC"];  
    var hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC","DCCC", "CM"];  
    var thousand = ["", "M", "MM", "MMM"];
    var str = "";
    return str + thousand[Math.floor(num / 1000)] + hundred[Math.floor(num % 1000 / 100)] + ten[Math.floor(num % 100 / 10)] +                            digit[Math.floor(num % 10)];
};