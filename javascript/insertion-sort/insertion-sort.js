'use strict';

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    console.log('this is the current temp', temp);
    console.log('i am j', j);
    console.log('i am iii', i);
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      console.log('arr[j]', arr[j]);
      j--;
    }
    arr[j+1] = temp;
    console.log('this is j--', j--);
    console.log(arr);
  }

  return arr;

};
let array = [7, 8, 5, 2, 4, 6, 3];
console.log(insertionSort(array));
