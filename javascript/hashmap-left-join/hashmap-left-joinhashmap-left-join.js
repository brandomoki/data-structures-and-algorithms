
let hashmap1 = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
  'outfit': 'garb',
  'guide': 'usher'
};

let hashmap2 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam'
};


/* This is a function that takes two hashmaps as arguments. */
function leftJoin(hashmap1, hashmap2){

 /* Creating an empty array and then creating an array of the keys in hashmap1. */
  let result = [];
  let keys = Object.keys(hashmap1);

  /* This is a for loop that is iterating through the keys array. */

  for (let i = 0; i < keys.length; i++){

  /* This is creating a variable for the key, value, and antonym. Then it is pushing the key, value, and antonym into the result array. */
    let key = keys[i];
    let value = hashmap1[key];
    let antonym = hashmap2[key];
    result.push([key, value, antonym]);
  }
  /* Returning the result array. */
  return result;
}

console.log(leftJoin(hashmap1, hashmap2));

module.exports = leftJoin;
