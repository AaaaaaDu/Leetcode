/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let result = 0, map = {}, len = emails.length;
      
    for (let i = 0; i < len; i++) {
      const items = emails[i].split('@');
  
      const domain = items[1];
      const address = items[0].replace(/(\+(\w|\W)+|\.)/g, '');
      const hash = domain + address;
      if (!map[hash]) {
        result += 1;
        map[hash] = 1;
      }
    }
    return result;
  };