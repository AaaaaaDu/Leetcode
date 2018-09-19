/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const stack = [0], len = rooms.length, visited = [true];
    
    for(let i = 1; i < len; i++) {
        visited[i] = false;
    }
    
    while(stack.length) {
        const cur = stack.pop();
        rooms[cur].forEach(function(val) {
            if(!visited[val]) {
                visited[val] = true;
                stack.push(val);
            }
        });
    }
    
    return !visited.includes(false)
};