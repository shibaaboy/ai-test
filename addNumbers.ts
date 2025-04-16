// Function to add two numbers 
const addNumbers = (a, b = 10) => { 
  return a + b; 
}

console.log('test', addNumbers(5, 4));
console.log('test2', addNumbers(10, 20));
console.log('test3', addNumbers(20));
console.log('test4', addNumbers(10));
