# Hashmap-left-join

## Challenge

- Write a function that LEFT JOINs two hashmaps into a single data structure.

  - Write a function called left join
  - Arguments: two hash maps
    - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
    - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency

Created a leftJoin function that takes two hashmaps as arguments.
We then create an empty array
Then we create an array of the keys in hashmap1.
This for loop is iterating through the keys array.
  Create a variable for the key,
   value,
    and antonym.

  Then we are pushing the key,
    value,
      and antonym into the result array.
    Returning the result array.

## Collaborators

- Stephen Clemmer

## Solution

![Whiteboard](Code%20Challenge%2033.png)
