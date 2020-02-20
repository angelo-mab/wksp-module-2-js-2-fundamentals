// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
  let sum = 0;
  grades.filter(function(yo) {
    sum += yo;
  });
  return Math.round(sum / grades.length);
}
function calculateLetterGrade(ave) {
  let letterGrade = "A";
  if (ave < 90) letterGrade = "B";
  if (ave < 80) letterGrade = "C";
  if (ave < 70) letterGrade = "D";
  if (ave < 60) letterGrade = "F";

  return letterGrade;
}
console.log(
  calculateLetterGrade(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]))
);
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
