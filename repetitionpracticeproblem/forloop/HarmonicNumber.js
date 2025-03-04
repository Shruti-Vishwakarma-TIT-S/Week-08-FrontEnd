// Take user input 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// enter value of n
rl.question('Enter the value of n: ', (n) => {
    n = parseInt(n);
    let harmonicNumber = 0.0;

    // loop to calculate harmonic number
    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }

    // To display the result
    console.log(`The ${n}th Harmonic Number is ${harmonicNumber}`);
    rl.close();
});
