


const { LinkedList } = require('../linked-list-insertion');

describe('tests', () => {
  let newList = new LinkedList();
  newList.insert('1');
  newList.insert('2');
  newList.insert('3');
  newList.insert('4');
  newList.insert('5');

  test('k is greater than the length of the list', () => {
    expect(newList.kthFromEnd(6)).toEqual('Exception');
  });



});

