'use strict';



const { Node } = require('../tree');
const { BinaryTree } = require('../tree');

describe('Testing Max Value', () => {
  it('Returns null if no data present', () => {
    let binaryTree = new BinaryTree();
    expect(binaryTree.root).toEqual(null);
  });
});
