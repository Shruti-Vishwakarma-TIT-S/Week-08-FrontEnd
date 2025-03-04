// Take input from the user
const readline = require('readline');

// User input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take user input here
rl.question('Enter a single digit number (0-9): ', (digit) => {
    digit = parseInt(digit);
    let word;

    // Use if, else-if and else statements
    if (digit === 0) word = "Zero";
    else if (digit === 1) word = "One";
    else if (digit === 2) word = "Two";
    else if (digit === 3) word = "Three";
    else if (digit === 4) word = "Four";
    else if (digit === 5) word = "Five";
    else if (digit === 6) word = "Six";
    else if (digit === 7) word = "Seven";
    else if (digit === 8) word = "Eight";
    else if (digit === 9) word = "Nine";
    else word = "Invalid input";

    // Print the word 
    console.log("The number in words is:", word);
    rl.close();
});
