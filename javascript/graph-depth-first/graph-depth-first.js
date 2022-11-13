'use strict';

function depthFirst(graph, startNode) {

  /* Creating a new set called visitedNodes. */
  const visitedNodes = new Set();

  /* Checking to see if the node is null. If it is, it returns null. */
  function traverse(node) {
    if (!node) {
      return null;
    }
    /* Adding the node to the visitedNodes set and then it is getting the neighbors of the node. */
    visitedNodes.add(node);
    const neighbors = graph[node];
    /* Iterating through the neighbors of the node. */
    for (let neighbor of neighbors) {
      /* If the neighbor is not in the visitedNodes set, it will call the traverse function on the neighbor. */
      if (visitedNodes.has(neighbor)) {
        continue;
      }
      traverse(neighbor);
    }
  }

  traverse(startNode);
  return visitedNodes;
}

module.exports = depthFirst;



