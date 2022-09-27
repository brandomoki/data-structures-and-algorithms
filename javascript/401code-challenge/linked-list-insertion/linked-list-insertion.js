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

//   add(value){
//     // creates new node
//     let node = new Node(value);


//     if(!this.head){
//       this.head = node;
//       return;
//     }

//     let current = this.head;

//     while(current.next){
//       current = current.next;
//     }
//     current.next = node;
//   }

// }


list.insert('1');
list.insert('2');
list.insert('3');

// console.log('filled list', list);
