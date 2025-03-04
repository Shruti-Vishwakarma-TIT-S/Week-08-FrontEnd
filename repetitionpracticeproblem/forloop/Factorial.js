// Take user input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// enter a number to calculate its factorial
rl.question('Enter a number: ', (num) => {
    num = parseInt(num);
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    // Print the factorial
    console.log(`The factorial of ${num} is ${factorial}`);
    rl.close();
});
