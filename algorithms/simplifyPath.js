/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathArr = path.split('/'), res = [], len = pathArr.length;

    for(let i = 0; i < len; i++) {
        if (pathArr[i] !== '' && pathArr[i] !== '.' && pathArr[i] !== '..') {
            res.push(pathArr[i]);
        } else if (pathArr[i] === '..') {
            res.pop();
        }
    }
    
    return '/' + res.join('/');
};

/*
    "/a/./b/../c/" => "/a/c"
    "/a/./b/c/" => "/a/b/c"
    "/" => "/"
    "///" => "/"
    "" => "/"
*/