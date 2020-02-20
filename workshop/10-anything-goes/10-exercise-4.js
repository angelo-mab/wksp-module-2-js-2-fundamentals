// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {
  let unique = array.filter(function(who) {
    return array.indexof(who) === array.lastIndexof(who);
  });
  return unique;
}
// The filter() method creates an array filled with all array elements that pass a test(provided as a function).
// The indexOf() method searches the array for the specified item, and returns its position.
// The lastIndexOf() method searches the array for the specified item, and returns its position.

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));
