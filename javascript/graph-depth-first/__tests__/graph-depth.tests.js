'use strict';
const { describe } = require('eslint/lib/rule-tester/rule-tester');
const depthFirst = require('../graph-depth-first.js');

describe('depthFirst', () => {
  it('should return a set of all nodes visited', () => {
    const graph = {
      a: ['b', 'c', 'd'],
      b: ['a', 'd'],
      c: ['a', 'e'],
      d: ['a', 'b'],
      e: ['c'],
      f: ['g'],
      g: ['f'],
    };

    const nodes = depthFirst(graph, 'a');
    expect(nodes).toEqual(new Set(['a', 'b', 'd', 'c', 'e']));
  });
});

