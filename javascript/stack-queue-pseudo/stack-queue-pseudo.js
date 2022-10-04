'use strict';



class PsuedoQueue() {
  constructor(){
    this.pushStack = [];
    this.popStack = [];
  }

  pushStack(value) {
    this.pushStack.push(value);
  }

  popStack() {
    if(!this.popStack.length) {
      while(this.pushStack.length)
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();

}
