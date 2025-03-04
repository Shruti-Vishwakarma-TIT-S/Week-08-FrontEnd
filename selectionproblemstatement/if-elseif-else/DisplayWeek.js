
// Take user input from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Enter a number between 1 and 7
rl.question('Enter a number (1-7): ', (num) => {
    num = parseInt(num);
    let weekday;

    // If, else-if, else conditions
    if (num === 1) weekday = "Sunday";
    else if (num === 2) weekday = "Monday";
    else if (num === 3) weekday = "Tuesday";
    else if (num === 4) weekday = "Wednesday";
    else if (num === 5) weekday = "Thursday";
    else if (num === 6) weekday = "Friday";
    else if (num === 7) weekday = "Saturday";
    else weekday = "Invalid input";

    // Print the result
    console.log("The day of the week is:", weekday);
    rl.close();
});
