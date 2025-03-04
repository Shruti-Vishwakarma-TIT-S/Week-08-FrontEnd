// Take input from user 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// enter the value of n
rl.question('Enter the value of n: ', (n) => {
    n = parseInt(n);

    // Loop to calculate and print 2^n values up to n
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }

    rl.close();
});
