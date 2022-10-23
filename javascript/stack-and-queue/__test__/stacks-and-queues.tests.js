'use strict';

const { Node, Stack, Queue, AnimalShelter} = require('../stack-and-queues');

describe('Stacks and Queues', () => {

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toBe(1);
  });

  it('Can successfully pop off of the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    let answer = stack.pop();


    expect(answer).toEqual(3);
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(5);


    expect(queue.front.value).toBe(10);
  });

  it('Can successfully dequeue out of a queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    let answer = queue.dequeue();


    expect(answer).toEqual(5);
  });

  it('Can successfully peek into a queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    let answer = queue.dequeue();


    expect(answer).toEqual(5);
  });




})
