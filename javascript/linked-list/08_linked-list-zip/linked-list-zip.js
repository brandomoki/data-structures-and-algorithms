'use strict';

const { LinkedList, Node } = require('../linked-list');

function zipNode(list, pointer) {

  let current = list.head;
  list.head = current.next;
  current.next = null;
  pointer.next = current;
  pointer = pointer.next;
  pointer.next = null;

  return pointer;
}

function zipLists (L1, L2) {
  let L3 = new LinkedList;
  let Point = new Node;
  let C1;

  C1 = L1.head;
  L1.head = C1.next;
  C1.next = null;
  L3.head = C1;
  Point = L3.head;

  while (L1.head !== null && L2.head !== null) {
    Point = zipNode(L2, Point);
    Point = zipNode(L1, Point);
  }

  if (L1.head !== null) {
    Point.next = L1.head;
  } else if (L2.head !== null) {
    Point.next = L2.head;
  }
  return L3.toString();

}

module.exports = {zipNode, zipLists};
