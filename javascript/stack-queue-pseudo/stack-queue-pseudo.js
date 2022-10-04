class PseudoQueue {

  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(value) {
    this.pushStack.push(value);
  }

  pop() {
    if(!this.popStack.length) {
      while(this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
}

let queue = new PseudoQueue;

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue);

let value = queue.pop();

console.log(value);
