# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);
newArray
(8) ["think", "dream", "learn", "write", "thought", "dreams", "knowledge", "truth"]

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join();
lexicon.join('')
"Thelargeshaggydogbarkedatthesilence"
lexicon.join(' ')
"The large shaggy dog barked at the silence"
lexicon.join()
"The,large,shaggy,dog,barked,at,the,silence"

```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
example .include():

let summer = ['annoying', 'sister', 'warrior'];
console.log('.include()', summer.include('sister')); // true
console.log('.include()', summer.include('sis')); //false
2. `.indexOf()`, `.push()` 
3. `.pop()`, `.sort()`

array.pop() removes the last element of an array and returns that element.

array.sort() sorts array alphabetically and returns the array

example for .pop():
let array1 = ['alpha', 'beta', 'gamma'];
array1.pop();
"gamma"
array1.pop()
"beta"


4. `.shift()`, `.unshift()`
5. `.reverse()`, `.lastIndexOf()`
6. `.splice()`, `.toString()`

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛


---

[Next lecture: Functions](../lecture-8-functions)