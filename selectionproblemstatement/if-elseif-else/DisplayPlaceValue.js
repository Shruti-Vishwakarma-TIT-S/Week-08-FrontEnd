// Take user input from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Enter a number as instructed below
rl.question('Enter a number (1, 10, 100, 1000, etc.): ', (num) => {
    num = parseInt(num);
    let unit;

    // If, else-if, else statements
    if (num === 1) unit = "Unit";
    else if (num === 10) unit = "Ten";
    else if (num === 100) unit = "Hundred";
    else if (num === 1000) unit = "Thousand";
    else unit = "Invalid input";

    // Print the output
    console.log("The unit is:", unit);
    rl.close();
});
