// Take user input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Enter a number and find its prime factors
rl.question('Enter a number: ', (num) => {
    num = parseInt(num);
    const factors = [];

    // Traverse till i*i <= N for efficiency
    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num = num / i;
        }
    }
    if (num > 1) factors.push(num); 

    // Print the prime factors
    console.log(`The prime factors are: ${factors.join(', ')}`);
    rl.close();
});
