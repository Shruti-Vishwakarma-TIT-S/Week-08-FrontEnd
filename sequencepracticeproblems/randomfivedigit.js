// Take five random digit
const randomDigit1 = Math.floor(Math.random() * 100) ;
const randomDigit2 = Math.floor(Math.random() * 100) ;
const randomDigit3 = Math.floor(Math.random() * 100) ;
const randomDigit4 = Math.floor(Math.random() * 100) ;
const randomDigit5 = Math.floor(Math.random() * 100) ;

// Calculate the sum 
const sum = randomDigit1 + randomDigit2 + randomDigit3 + randomDigit4 + randomDigit5;
// Calculate the average 
const average = sum / 5;

// Print the sum after calculating it
console.log(`Random 5-digit number sum: ${sum}`);
// Print the average after calculating it
console.log(`Random 5-digit number average: ${average}`);

