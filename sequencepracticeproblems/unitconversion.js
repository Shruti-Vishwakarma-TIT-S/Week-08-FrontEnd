// Inches to feet conversion
// 1 feet = 12 inches 
const inches = 42;
// 1 inch = 1/12 feet
const feet = inches / 12;
// 42 inches = 42 / 12 feet 
console.log(`${inches} inches is equal to ${feet} feet`);

// Rectangular plot dimensions in meters
const lengthFeet = 60;
const widthFeet = 40;
// Length in meters 
const lengthMeters = lengthFeet * 0.3048;
const widthMeters = widthFeet * 0.3048;
// Print the dimensions in meters
console.log(`Rectangular plot dimensions in meters: ${lengthMeters} meters x ${widthMeters} meters`);

// Area of 25 plots in square meters
const areaMeters = lengthMeters * widthMeters;
// Calculate the area of 25 plots in square meters
const areaAcres = (areaMeters * 25) / 4046.86;
// Print area in acres
console.log(`Area of 25 plots in acres: ${areaAcres} acres`);
