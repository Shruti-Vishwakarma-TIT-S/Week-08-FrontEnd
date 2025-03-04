// Take user input from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Enter a number as described below
rl.question('Enter a number (1, 10, 100, 1000, etc.): ', (num) => {
    num = parseInt(num);
    let unit;

    // Switch cases to handle different numbers
    switch (num) {
        case 1:
            unit = "Unit";
            break;
        case 10:
            unit = "Ten";
            break;
        case 100:
            unit = "Hundred";
            break;
        case 1000:
            unit = "Thousand";
            break;
        default:
            unit = "Invalid input";
    }

    // Print the output
    console.log("The unit is:", unit);
    rl.close();
});
