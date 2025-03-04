// Take day and month to demonstrate an example
const day = 25;
const month = 4;

// If month is between March 20 and June 20, if statement will execute
if ((month === 3 && day >= 20) || (month === 6 && day <= 20) || (month > 3 && month < 6)) {
  console.log("True");
} 
// If if statement fails, then else statement will execute
else {
  console.log("False");
}
