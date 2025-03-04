// Step a: Generate 10 random 3-digit numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100); 
}

// Step b: Store these numbers in an array
console.log("Original Random Numbers: ", randomNumbers);

// Step c: Sort the array in ascending order
randomNumbers.sort((a, b) => a - b); 
console.log("Sorted Array: ", randomNumbers);

// Step d: Find the 2nd largest and 2nd smallest elements
// 2nd element in the sorted array
const secondSmallest = randomNumbers[1];
// 2nd last element in the sorted array 
const secondLargest = randomNumbers[randomNumbers.length - 2]; 

console.log("2nd Smallest: ", secondSmallest);
console.log("2nd Largest: ", secondLargest);
