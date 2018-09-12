/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */


var cloneGraph = function (graph) {
    if (graph === null) return null;
    var created = new Map();
    return copy(graph);

    function copy(node) {
        var newNeighbors = [];
        for (var i = 0; i < node.neighbors.length; i++) {
            var neighbor = node.neighbors[i];
            var newNeighbor;
            if (created.has(neighbor.label)){
                newNeighbor = created.get(neighbor.label);
            } else if (neighbor.label == node.label) { //this is a self-cycle
                newNeighbor = new UndirectedGraphNode(neighbor.label);
                created.set(neighbor.label, newNeighbor);
            } else {
                newNeighbor = copy(neighbor);
            }
            newNeighbors.push(newNeighbor);
        }
        var newNode;
        if (!created.has(node.label)) {
            newNode = new UndirectedGraphNode(node.label);
            created.set(node.label, newNode);
        }
        else {
            newNode = created.get(node.label);
        }
        newNode.neighbors = newNeighbors;
        return newNode;
    }
};

