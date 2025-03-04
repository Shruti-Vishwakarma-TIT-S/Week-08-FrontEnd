// Take a year of your choice and check if it's a leap year.
const year = 2024;

// Condition 1: year divisible by 4
// Condition 2: year not divisible by 100 unless it's also divisible by 400
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(year + " is a Leap Year");
} 
// If above condition fails, else statement will execute
else {
  console.log(year + " is not a Leap Year");
}
