# Graph-depth-first

## Challenge

Conduct a depth first preorder traversal on a graph

## Feature Tasks

Write the following method for the Graph class:

- Name: Depth first
- Arguments: Node (Starting point of search)
- Return: A collection of nodes in their pre-order depth-first traversal order
- Program output: Display the collection

## Approach

- Creating a new set called visitedNodes.
- Checking to see if the node is null. If it is, it returns null.
- Adding the node to the visitedNodes set and then it is getting the neighbors of the node.
- Iterating through the neighbors of the node.
- If the neighbor is not in the visitedNodes set, it will call the traverse function on the neighbor.

## tests

 `jest`

## Resources

[geeksforgeeks](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)

[jarednielsen.com](https://jarednielsen.com/data-structure-graph-depth-first-search/)
