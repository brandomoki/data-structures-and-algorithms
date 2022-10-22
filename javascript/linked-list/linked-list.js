'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insert(value){
    let node = new Node(value);
    if (!this.head){
      this.head = node;
      return;
    }

  }

  includes(value) {
    let current = this.head;
    while(current !== null) {
      if(current.value === value) {
        return true;

      }else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `{${current.value}} ->`;
      current = current.next;
    }
    return string + 'null';
  }

}



let list = new LinkedList();
console.log('empty list', list);



// list.insert('A');
// list.insert('B');
// list.insert('C');

// console.log('filled list', list);

module.exports = LinkedList;
