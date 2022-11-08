# Graph-breadth-first

## Challenge

Implement a breadth-first traversal on a graph.Implement a breadth-first traversal on a graph.

## Feature Tasks

Write the following method for the Graph class:

- breadth first
- Arguments: Node
- Return: A collection of nodes in the order they were visited.
- Display the collection

## Approach

- Create a queue for the breadth-first traversal.
- Create a set to store the visited nodes.
- Add the starting node to the queue.
- Add the starting node to the visited nodes set.
- While the queue is not empty
- Remove the first node from the queue.
- Get the neighbors of the current node.
- For each neighbor of the current node
- If the neighbor has already been visited, skip it.
- Otherwise, add the neighbor to the visited nodes set.
- And add the neighbor to the queue.

## tests

 `jest`

## Resources

[breadth-first-search-traversal-javascript](https://linuxhint.com/breadth-first-search-traversal-javascript/)
[geeksforgeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)

[fireship.io](https://fireship.io/courses/javascript/interview-graphs/)
