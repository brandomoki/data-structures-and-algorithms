'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;

  }

  inOrder() {

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
  }

  findMax() {
    let temp = null;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.value > temp) {
        temp = node.value;
      }
      if (node.right) traverse(node.right);
      if (node.value > temp) {
        temp = node.value;
      }
      return temp;
    };
    traverse(this.root);
    console.log(temp);
  }
}



module.exports = {
  Node,
  BinaryTree,
};
