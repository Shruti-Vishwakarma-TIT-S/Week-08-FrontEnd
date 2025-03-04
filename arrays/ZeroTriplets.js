// Method to find all triplets whose sum is zero in an array of integers
const findTriplets = (arr) => {
    const result = [];

    // For loop to iterate through the array elements
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return result;
};

// Test the program
const numbers = [0, -1, 2, -3, 1];
const triplets = findTriplets(numbers);

// If and else statements to display the result
if (triplets.length > 0) {
    console.log("The triplets whose sum is zero are:");
    triplets.forEach(triplet => console.log(triplet));
} 
else {
    console.log("No triplets found that sum to zero.");
}
