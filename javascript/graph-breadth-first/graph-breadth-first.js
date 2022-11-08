


/* A function that takes in a graph and a startNode. */
function breadthFirst(graph, startNode) {
  const queue = [];
  const visitedNodes = new Set();

  queue.push(startNode);
  visitedNodes.add(startNode);

  while (queue.length) {
    const currentNode = queue.shift();
    const neighbors = graph[currentNode];

    for (let neighbor of neighbors) {
      if (visitedNodes.has(neighbor)) {
        continue;
      }
      visitedNodes.add(neighbor);
      queue.push(neighbor);
    }
  }
  console.log('queue', queue);
  return visitedNodes;
}

module.exports = breadthFirst;

// Tests

// /* Creating a graph with the nodes and their neighbors. */
// const graph = {
//   a: ['b', 'c', 'd'],
//   b: ['a', 'd'],
//   c: ['a', 'e'],
//   d: ['a', 'b'],
//   e: ['c'],
//   f: ['g'],
//   g: ['f'],
// };

// let nodes = breadthFirst(graph, 'a');
// console.log(nodes); // Set { 'a', 'b', 'c', 'd', 'e' }

// nodes = breadthFirst(graph, 'd');
// console.log(nodes); // Set { 'd', 'a', 'b', 'c', 'e' }
