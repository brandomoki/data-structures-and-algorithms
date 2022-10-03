class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop(){

  }
  seek(){
  }
  isEmpty(){
    return this.top() === null
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
  }
  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    }
    else{
      this.front = newNode;
    }
    this.back = newNode;
  }
  dequeue(){
  }
}
