'use strict';

const { insertBefore } = require("cheerio/lib/api/manipulation");

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    if (!this.head){
      this.head = node;
      return;
    }

  }
}
let list = new LinkedList();
console.log('empty list', list);

  add(value){
    // creates new node
    let node = new Node(value);


    if(!this.head){
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node;
  }



  insertBefore(value, newValue){
    if(!this.head){
      throw new Error('Linked List is empty');
    }

    let current = this.head;
    while(current){
      if (current.next.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode
        return
      }
      current = current.next;
    }

  kthFromEnd(k) {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    let results = length - k;
    if (results < 1 || result > length)
    return 'Exception';
    current = this.head;
    for (let i = 1; i < result; i++) {
      current = current.next;
    }
    return current.value;
  }
}


insertAfter(value,)
list.insert('1');
list.insert('2');
list.insert('3');

// console.log('filled list', list);
