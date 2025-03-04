// Generate 5 random 3-digit values by taking arrays 
let values = [];
// For loop to initialize five random values of three digit
for (let i = 0; i < 5; i++) {

  // To push values in array
  values.push(Math.floor(Math.random() * 900) + 100);
}

// let min and max values be at 0 index
let min = values[0];
let max = values[0];

// Compare values and update min and max 
for (let i = 1; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
  if (values[i] > max) {
    max = values[i];
  }
}

// Print values, min and max 3-digit numbers
console.log("Values:", values);
console.log("Minimum value:", min);
console.log("Maximum value:", max);
