# Insertion-Sort

## Challenge

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Algorithm

array is equal to [7, 8, 5, 2, 4, 6, 3];

let i equal to 1, and then loop through the forLoop for the number of times equal to the length of the array -------------(i is currently 1)
declare j and let it be equal to i minus 1  -------------------------------(so j is 0 currently)
declare temp variable to the array at index i  -------------(temp is currently at index 1, whose value is 8)

enter the while loop
if j is less than or equal to zero, and if the value at j is less than the value at temp
than array at index j adds one to j to equal array at index j --------------(j is now 1 and temp is now 5)
decrement j
repeat till the length of the array has been reached

array at index j adds 1 to j to equal temp variable
return array

```javascript
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
```

## contributions

Stephen Clemmer

[Geeks for Geeks](https://www.geeksforgeeks.org/insertion-sort/)

[w3 Resources](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php#:~:text=Insertion%20sort%20is%20a%20simple,%2C%20heapsort%2C%20or%20merge%20sort)
