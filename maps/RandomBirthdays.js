// Function to generate random birthdays
function generateBirthdays() {
    const birthdays = [];
    for (let i = 0; i < 50; i++) {
        // Generate a random month between 1 and 12
        const month = Math.floor(Math.random() * 12) + 1; 
        birthdays.push(month); 
    }
    return birthdays;
}

// Function to group individuals by birth month
function groupByMonth(birthdays) {
    const monthGroups = {};

    // Initialize months in the dictionary
    for (let i = 1; i <= 12; i++) {
        monthGroups[i] = []; 
    }

    // Add individuals to the corresponding month group
    birthdays.forEach((month, index) => {
        monthGroups[month].push(`Person ${index + 1}`);
    });

    return monthGroups;
}

// Generate birthdays for 50 individuals
const birthdays = generateBirthdays();
console.log("Birth Months (1 = Jan, 12 = Dec): ", birthdays);

// Group individuals by birth month
const groupedBirthdays = groupByMonth(birthdays);

// Print grouped results
console.log("Individuals grouped by birth month:");
for (const [month, individuals] of Object.entries(groupedBirthdays)) {
    console.log(`Month ${month}: ${individuals.join(', ')}`);
}
