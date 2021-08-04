// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// Describe the name of the function - shuffle
describe("shuffle", () => {
// Test what the function does - removes the first item from an array and shuffles the remaining content
    it("removes the first item from an array and shuffles the remaining content", () => {
// Expect the output of the function to be equal to the correct output - output of shuffle to equal an array of the content of the given array shuffled and without the first element of the given array
// In order to check for a randomly organized array, I used expect.arrayContaining(). The arrayContaining method is attatced to the expect object. expect.arrayContaining() matches a recieved array which contains all of the elements in the expected array.
        expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// b) Create the function that makes the test pass.

// Create a function named shuffle
// That takes an array as an arguement for the input
const shuffle = (array) => {
// Assign a new array to the given array without the first element
// Use the .slice method to return an array with all the elements starting at index 1. This removes index 0.
    newArray = array.slice(1)
// Use the .sort method to randomly sort the array
// The .sort method takes an anonymous function as a parameter
// In the compareFunction, I put Math.random() - 0.5, which is a random number that may be positive or negative, so the sorting function reorders the elements randomly.
// Return the new array 
    return newArray.sort(() => Math.random() - 0.5)
}

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
console.log(shuffle(colors1))
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
console.log(shuffle(colors2))
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// Describe the name of the function - smallestLargest
describe("smallestLargest", () => {
    // Test what the function does - returns an array of the minimum and maximum numbers of a given array in that order
        it("returns an array of the minimum and maximum numbers of a given array in that order", () => {
    // Expect the output of the function to be equal to the correct output - 
            expect(smallestLargest(nums1)).toEqual([-8, 90])
            expect(smallestLargest(nums2)).toEqual([5, 109])
        })
    })

// b) Create the function that makes the test pass.

// Create a function named smallestLargest
// That takes an array as an arguement for the input
const smallestLargest = (array) => {
// Create an empty results array that will hold the final array
    resultArray = []
// Use the .sort method to sort the array from least to greatest
// The .sort method must contain a compareFunction as a parameter, if it is not provided the elements of the array are converted into strings and sorted alphabetically
// The compareFunction takes two parameters, the first element and the second element, in order to sort the numbers in ascending order you have to subtract the second element from the first element
// In order to further manipulate the new array, you need use the .concat method with no argument to return a copy of the manipulated array. Without it, the latter logic will occur twice.
    newArray = array.sort((a, b) => a - b).concat()
// Remove the first element of the array using the .shift method to get the smallest value and assign it to the variable smallest
    smallest = newArray.shift()
// Remove the last element of the array using the .pop method to get the largest value and assign it to the variable largest
    largest = newArray.pop()
// Using the .push method, push the smallest and largest numbers into the result array in that order
    resultArray.push(smallest, largest)
// return the result array
    return resultArray
}

var nums1 = [3, 56, 90, -8, 0, 23, 6]
console.log(smallestLargest(nums1))
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
console.log(smallestLargest(nums2))
// Expected output: [5, 109]

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Describe the name of the function - noDuplicates
describe("noDuplicates", () => {
    // Test what the function does - returns one array from two given arrays with no duplicate values
        it("returns one array from two given arrays with no duplicate values", () => {
    // Expect the output of the function to be equal to the correct output - 
            expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
    })

// b) Create the function that makes the test pass.

// Create a function named noDuplicates
// That takes a dynamic number of arrays as arguements for the input
const noDuplicates = (...arrays) => {
// Using the .concat method, concat the dynamic number of arrays with an empty array
// Assign the new array to a variable
    let newArray = [].concat(...arrays)
// Use the .filter method to remove duplicate values
// Pass in the parameters of value and index into the .filter method
// Return the result
    return newArray.filter((value, index) => {
// Using the .indexOf method, evaluate if the index of the the value is equal to the index
// This will return only one of duplicate values
        return newArray.indexOf(value) === index;
    })
}

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
console.log(noDuplicates(testArray1, testArray2))
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

