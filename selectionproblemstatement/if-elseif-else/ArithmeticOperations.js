// take user input for three numbers
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Enter three distinct or same numbers as a, b and c
rl.question('Enter three numbers separated by space (a b c): ', (input) => {
    const [a, b, c] = input.split(' ').map(Number);

    // Certain operations to be performed   
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;

    // Store result in array
    const results = [result1, result2, result3, result4];
    // To find max and min values out of array
    const max = Math.max(...results);
    const min = Math.min(...results);

    // Print the results and max and min values
    console.log(`Results: ${results}`);
    console.log(`Maximum value: ${max}`);
    console.log(`Minimum value: ${min}`);

    rl.close();
});
