const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let low = 1;
let high = 100;
let mid;

console.log("Think of a number between 1 and 100.");

function findMagicNumber() {
    if (low <= high) {
        mid = Math.floor((low + high) / 2);
        rl.question(`Is your number less than ${mid}? (yes/no/equal): `, (answer) => {
            if (answer.toLowerCase() === 'yes') {
                high = mid - 1;
                findMagicNumber();
            } else if (answer.toLowerCase() === 'no') {
                low = mid + 1;
                findMagicNumber();
            } else if (answer.toLowerCase() === 'equal') {
                console.log(`Your magic number is ${mid}!`);
                rl.close();
            } else {
                console.log("Invalid input. Please answer with 'yes', 'no', or 'equal'.");
                findMagicNumber();
            }
        });
    }
}

findMagicNumber();
