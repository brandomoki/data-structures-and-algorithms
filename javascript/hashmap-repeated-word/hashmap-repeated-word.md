# Hashmap-Repeated-Word

* The function takes a string as an argument and returns the first word that is repeated in the string
* @param string - the string to be searched
* @returns The first word that is being repeated.

```Javascript
let test = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
```

* A regular expression that is used to remove all punctuation from a string.

```Javascript
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
```

* Remove all punctuation from a string.
* @param string - The string to remove punctuation from.
* @returns a string with all punctuation removed.

```Javascript
function removePunctuation(string) {
  return string.replace(regex, '');
}
```

* Taking a string as an argument and returning the first word that is repeated in the string.

```Javascript
function first_repeating_word(string){

  /* Removing all punctuation from the string and then making it lowercase. */
  let puncString = removePunctuation(string);

  let lowString = puncString.toLowerCase();
```

* Creating a new map.

```Javascript
  let word_count = new Map();
```

* Splitting the string into an array of words.

```Javascript
  for(let i of lowString.split(' ')){
```

* Checking if the word is already in the map. If it is, it increments the value of the word by 1.

```Javascript
    if(word_count.has(i)){
      word_count.set(i,word_count.get(i) + 1);
    }
```

* If the word is not in the map, it adds the word to the map and sets the value of the word to 1.

```Javascript
    else word_count.set(i,1);
```

* This is checking if the word is being repeated. If it is, it returns the word.

```Javascript
    if(word_count.get(i) > 1)
      return i;
  }
```

* Returning a string if no word is being repeated.

```Javascript
  return 'No word is being repeated';
}
```

* Calling the function first_repeating_word and passing the variable test as an argument.

```Javascript
console.log(first_repeating_word(test));
```
