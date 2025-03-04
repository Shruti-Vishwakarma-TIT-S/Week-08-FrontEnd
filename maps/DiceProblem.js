// Initialize a dictionary to store the counts of each die number
const dieRolls = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
let maxRoll = 10;

// Function to roll a die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Roll the die until one of the numbers reaches 10 times
while (true) {
    const roll = rollDie(); 
    dieRolls[roll]++;       

    // Check if any number has reached the maximum roll count (10 times)
    if (dieRolls[roll] === maxRoll) {
        break;
    }
}

// Find the number that occurred the most and the least
let maxCount = -Infinity;
let minCount = Infinity;
let maxNumber = null;
let minNumber = null;

// Loop through the dictionary to determine max and min counts
for (const [number, count] of Object.entries(dieRolls)) {
    if (count > maxCount) {
        maxCount = count;
        maxNumber = number;
    }
    if (count < minCount) {
        minCount = count;
        minNumber = number;
    }
}

// Output the results
console.log("Die Roll Counts: ", dieRolls);
console.log(`Number that reached maximum times: ${maxNumber} (Count: ${maxCount})`);
console.log(`Number that reached minimum times: ${minNumber} (Count: ${minCount})`);
