//Create a variable "num" and assign it a value of your choice
const num = 24;

// Calculate the square root of "num" and display the result
console.log("The square root of " + num + " is: " + Math.sqrt(num));

// Generate a random number between 0 and 1, multiply it by 10, round it to the nearest whole number, and display the result
const randomNum = Math.round(Math.random() * 10);
console.log("A random number between 0 and 10 is: " + randomNum);

// Create a new date object called "today" and display the current date and time
const today = new Date();
console.log("The current date and time is: " + today);

// Extract year, month, day of the month, and day of the week from "today" object and display them in console
console.log("The current year is: " + today.getFullYear());
console.log("The current month is: " + (today.getMonth() + 1));
console.log("The current day of the month is: " + today.getDate());
console.log("The current day of the week is: " + today.getDay());

// Set the year to 2022, month to December, and day of the month to 31
today.setFullYear(2022);
today.setMonth(11); // Note: January is 0, so December is 11
today.setDate(31);

// Extract updated year, month, and day of the month from "today" object and display them in console
console.log("The updated year is: " + today.getFullYear());
console.log("The updated month is: " + (today.getMonth() + 1));
console.log("The updated day of the month is: " + today.getDate());

// Create a new date object called "birthday" with your own birthday
const birthday = new Date("2000-05-13"); // YYYY-MM-DD format

// Calculate the number of milliseconds between "birthday" and "today" and display the result
const millisecondsDiff = today.getTime() - birthday.getTime();
console.log("The number of milliseconds between my birthday and today is: " + millisecondsDiff);

// Calculate the number of days between "birthday" and "today" and display the result
const daysDiff = Math.round(millisecondsDiff / (1000 * 60 * 60 * 24)); // 1 day = 1000ms * 60s * 60min *24h
console.log("The number of days between my birthday and today is: " + daysDiff);

