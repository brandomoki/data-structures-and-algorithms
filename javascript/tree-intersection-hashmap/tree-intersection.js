
'use strict';

const Hashmap = require('../hash-tables/hash-tables.js');

/**
 * We walk through the first tree and add all the values to a hashmap. Then we walk through the second
 * tree and check if the hashmap contains the value. If it does, we add it to the result array
 * @param tree1 - the first tree
 * @param tree2 - the second tree
 * @returns An array of values that are in both trees.
 */
function tree_intersection(tree1, tree2) {

  /* Creating a new hashmap with 1024 buckets and an empty array to store the results. */
  let hashmap = new Hashmap(1024);
  let result = [];

  /**
 * We're going to walk through the tree, adding each node's value to a hashmap
 * @param node - the current node we're on
 */
  let _walk = (node) => {
    hashmap.add(node.value, node.value);
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };

  /* It's calling the _walk function with the root of the first tree. */
  _walk(tree1.root);

  /* It's calling the _walk function with the root of the second tree. */
  _walk = (node) => {

    /* It's checking if the hashmap contains the value of the current node. If it does, it adds it to
   the result array. */

    if (hashmap.contains(node.value)) result.push(node.value);
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };
  /* It's calling the _walk function with the root of the second tree. */

  _walk(tree2.root);
  return result;
}
console.log(tree_intersection(tree1, tree2));

module.exports = tree_intersection;
