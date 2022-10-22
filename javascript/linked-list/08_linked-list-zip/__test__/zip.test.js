'use strict';

const { describe } = require('eslint/lib/rule-tester/rule-tester');
const { LinkedList, Node } = require('../../linked-list');
const { zipNode, zipLists} = require('../linked-list-zip');

describe('zipLists', () => {

  it ('Returns a zipped list if one is empty', () => {
    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(2);
    listOne.append(3);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  it ('Returns a zipped list if they are the same length', () => {
    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(3);
    listOne.append(5);

    listTwo.insert(2);
    listTwo.append(4);
    listTwo.append(6);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  it ('Returns a zipped list if second is longer than the first ', () => {
    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(3);
    listOne.append(5);

    listTwo.insert(2);
    listTwo.append(4);
    listTwo.append(6);
    listTwo.append(7);

    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> NULL');
  });

  it ('Returns a zipped list if first is longer than the second ', () => {
    let listOne = new LinkedList;
    let listTwo = new LinkedList;

    listOne.insert(1);
    listOne.append(3);
    listOne.append(5);
    listOne.append(7);

    listTwo.insert(2);
    listTwo.append(4);
    listTwo.append(6);


    let zipped = zipLists(listOne, listTwo);

    expect(zipped).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> NULL');
  });




});

