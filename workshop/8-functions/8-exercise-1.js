// Q1
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
 let bigger = 0;
 if(num1 > num2)
  bigger = num1;
 else
  bigger = num2;
 return bigger;
}

// Call the function
max(12, 43);