// // ASSESSMENT 1: Coding practical questions

// // To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// // Please read all questions thoroughly
// // Psuedo coding is HIGHLY recommended
// // If you get stuck, please leave comments to help us understand your thought process

// // --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// // Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// const boiling = (boilingPoint) => {
//     if(boilingPoint < 212){
//       return `${boilingPoint} is below boiling point`
//     } else if(boilingPoint > 212) {
//       return `${boilingPoint} is above boiling point`
//     } else if(boilingPoint === 212) {
//         return `${boilingPoint} is at boiling point`
//     } else {
//     return "something went wrong"
// }
// }

// console.log(boiling(temp1));
// console.log(boiling(temp2));
// console.log(boiling(temp3))

// // --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]{
//   for( var i = 0; i <= myNumbers1.length; i++){
//     var myNumbers1 = item[i] * item[i];
//     if (i == myNumbers1.length){
//       return myNumbers1;
//     }
//   }
// }
// consolge.log(myNumbers1)

// --------------------3) Create a function that multiplies each number in the array by 5 using map.

// var myNumbers2 = [8, -7, 0, 6, 2]

// const multiplyNumbers = (arr) => {
// 	let multiplyNumbers= arr.map((value) => {
// 		return value * 5
// 	})
// 	return multiplyNumbers
// }
// console.log(multiplyNumbers(myNumbers2));

// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

//  var stringWithVowels1 = "HeyThereLearnStudent"
//  var stringWithVowels2 = "ILoveJavaScript"

// const removeVowel= (str) => {
// 	const peskyVowels = ['a', 'e', 'i', 'o', 'u',]
// 	let Array = str.split('')
// 	let repackage = Array.filter((letters) => {
// 		return peskyVowels.includes(letters)
// 	})
// 	return repackage.join('')
// }
// console.log(vowelRemover(stringWithVowels1));
// console.log(vowelRemover(stringWithVowels2))

// // --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// // Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

// var notAString1 = true
// var notAString2 = 42

//Im confused on how run the number

// // --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// // Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]

// // --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// // Expected output: "Itchy" "Daffy" "Ren"

// not sure where to start with this one.
