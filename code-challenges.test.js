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
    resultArray = []
    newArray = array.sort((a, b) => a - b).concat()
    smallest = newArray.shift()
    largest = newArray.pop()
    resultArray.push(smallest, largest)
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

// // Describe the name of the function - 
// describe("", () => {
//     // Test what the function does - 
//         it("", () => {
//     // Expect the output of the function to be equal to the correct output - 
//             expect().toEqual()
//         })
//     })


// b) Create the function that makes the test pass.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

