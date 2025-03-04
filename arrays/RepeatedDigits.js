// Function to find numbers with repeated digits
function findRepeatedDigits() {
    const repeatedDigits = [];
    for (let i = 0; i <= 100; i++) {
        const numStr = i.toString(); 
        if (numStr.length === 2 && numStr[0] === numStr[1]) {
            repeatedDigits.push(i); 
        }
    }
    return repeatedDigits;
}

// Get the repeated digits
const repeatedNumbers = findRepeatedDigits();

// Display the result
console.log("Numbers with repeated digits:", repeatedNumbers);
