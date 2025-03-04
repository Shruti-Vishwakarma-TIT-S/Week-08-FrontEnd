// Step a: Generate 10 random 3-digit numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100); // Random number between 100 and 999
}

// Step b: Store these numbers in an array
console.log("Random Numbers: ", randomNumbers);

// Step c: Find the 2nd largest and 2nd smallest elements without sorting
let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

for (let num of randomNumbers) {
    // Check for the largest and second largest
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }

    // Check for the smallest and second smallest
    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}

console.log("2nd Largest: ", secondLargest);
console.log("2nd Smallest: ", secondSmallest);
