var count = 1;
var code = {};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    var short = "http://tinyurl.com/"+count;
    count++;
    code[short] = longUrl;
    return short;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return code[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */