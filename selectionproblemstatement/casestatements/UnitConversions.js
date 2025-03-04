// Take user input for conversion type
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Print statement for different operations
console.log("Unit Conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

// Choose an option between 1 and 4
rl.question('Choose an option (1-4): ', (option) => {
    option = parseInt(option);

    // Enter a value to convert
    rl.question('Enter the value to convert: ', (value) => {
        value = parseFloat(value);
        let result;

        // Switch case for different options based on user input
        switch (option) {
            case 1:
                result = value * 12;
                console.log(`${value} feet is equal to ${result} inches`);
                break;
            case 2:
                result = value * 0.3048;
                console.log(`${value} feet is equal to ${result} meters`);
                break;
            case 3:
                result = value / 12;
                console.log(`${value} inches is equal to ${result} feet`);
                break;
            case 4:
                result = value / 0.3048;
                console.log(`${value} meters is equal to ${result} feet`);
                break;
            default:
                console.log("Invalid option");
                break;
        }

        rl.close();
    });
});
