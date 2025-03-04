// Take user input 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Enter a single digit number
rl.question('Enter a single digit number (0-9): ', (digit) => {
    digit = parseInt(digit);
    let word;

    // Switch case statement to print corresponding word for the given digit
    switch (digit) {
        case 0:
            word = "Zero";
            break;
        case 1:
            word = "One";
            break;
        case 2:
            word = "Two";
            break;
        case 3:
            word = "Three";
            break;
        case 4:
            word = "Four";
            break;
        case 5:
            word = "Five";
            break;
        case 6:
            word = "Six";
            break;
        case 7:
            word = "Seven";
            break;
        case 8:
            word = "Eight";
            break;
        case 9:
            word = "Nine";
            break;
        default:
            word = "Invalid input";
    }

    // Print the output
    console.log("The number in words is:", word);
    rl.close();
});
