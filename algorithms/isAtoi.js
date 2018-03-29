var myAtoi = function(str) {
    var s = parseInt(str) ? parseInt(str) : 0;
    s = s >= Math.pow(2, 31) ? Math.pow(2, 31) - 1 : s;
    s = s <= Math.pow(-2, 31) ? Math.pow(-2, 31) : s;
    return s;
}