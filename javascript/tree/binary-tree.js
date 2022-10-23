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

  preOrder() {
    let arr = [];
    const traverse = (node) => {
      arr.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return arr;
  }

  postOrder() {
    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.value);
    };
    traverse(this.root);
    return arr;
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;

    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return 'the tree is empty';
    }

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = current;
      }

    }

    if (!found) return 'false';
    if (found) return 'true';


  }
}
