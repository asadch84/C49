//🚀 Day 49 Challenge: Start Coding! 🚀
/*Question 145: Create a function that accepts a callback and invokes it with some arguments.*/
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(add, 5, 3); // Outputs: 8
/*Question 146: Show an example of a callback function used to filter an array of numbers.*/
// Define a callback function to filter even numbers
function filterEvenNumbers(num) {
    return num % 2 === 0;
}
// Example array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use the filter method with the callback function
var evenNumbers = numbers.filter(filterEvenNumbers);
// Output the filtered array
console.log("Even numbers:", evenNumbers);
/*Question 147: Explain how to handle errors in a callback pattern.*/
// Function that uses a callback pattern, including error handling
function fetchData(callback) {
    // Simulating an error condition
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data); // No error, data is fetched successfully
    }
    else {
        callback(error); // Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData(function (error, data) {
    if (error) {
        console.error(error.message); // Handles the error
    }
    else {
        console.log(data); // Processes the data
    }
});
// Demonstrates a callback pattern where errors are handled gracefully.
