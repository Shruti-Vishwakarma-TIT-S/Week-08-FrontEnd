// Import statement for user input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find prime factors of a number
function getPrimeFactors(n) {

    // Array to store prime factors
    const factors = []; 
    let divisor = 2;

    // While loop to find prime factors
    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor); 
            n = n / divisor; 
        } else {
            divisor++; 
        }
    }

    return factors;
}

// Take input from the user
rl.question("Enter a number to find its prime factors: ", (input) => {
    const n = parseInt(input);

    // If condition
    if (isNaN(n) || n <= 1) {
        console.log("Please enter a valid number greater than 1.");
    } 
    // Else condition
    else {
        const primeFactors = getPrimeFactors(n); 
        console.log(`Prime factors of ${n} are:`, primeFactors);
    }

    rl.close();
});
