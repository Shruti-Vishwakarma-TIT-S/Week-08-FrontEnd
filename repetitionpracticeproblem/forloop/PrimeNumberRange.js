// Take user input for range
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Enter a range 
rl.question('Enter the range (start end): ', (input) => {
    const [start, end] = input.split(' ').map(Number);

    // For each number in the range, check if it's prime
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        if (num <= 1) isPrime = false;
        else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) console.log(num);
    }

    rl.close();
});
