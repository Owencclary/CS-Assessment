const perf = require('execution-time')();


/* Write a function that takes in an array of numbers. 
The function should return True if any two numberss in list sum to 0, and false otherwise. */

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

perf.start()                   
addToZero([1, 2, 3, -2])
let runtime1 = perf.stop()

console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
console.log(runtime1.preciseWords)
console.log()

// RUNTIME: 
// - 45.083 μs

// RUNTIME COMPLEXTY:
// - O(n^2)

// SPACE COMPLEXTIY:
// 0(1)

/* Write a function that takes in a single word, as a string. 
It should return True if that word contains only unique characters. Return False otherwise. */

function hasUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

perf.start()         
hasUniqueChars("Moonday")
let runtime2 = perf.stop()

console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log(runtime2.preciseWords)
console.log()

// RUNTIME:
// - 39.833 μs

// RUNTIME COMPLEXTY:
// - O(n^2)

// SPACE COMPLEXTIY:
// 0(1)

/* A pangram is a sentence that contains all the letters of the English alphabet at least once, 
like “The quick brown fox jumps over the lazy dog.” */

function isPangram(str) {
    let alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    const lowercaseStr = str.toLowerCase()
    for (let i = 0; i < lowercaseStr.length; i++) {
        alphabet.delete(lowercaseStr[i])
    }
    return alphabet.size === 0;
}

perf.start()            
isPangram("The quick brown fox jumps over the lazy dog!")
let runtime3 = perf.stop()

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
console.log(runtime3.preciseWords)
console.log()

// RUNTIME:
// - 39.75 μs

// RUNTIME COMPLEXTY:
// - O(n)

// SPACE COMPLEXTIY:
// 0(n)

/* Write a function, find_longest_word,
 that takes a list of words and returns the length of the longest one. */

function findLongestWord(arr) {
    let longestWord = 0
    arr.forEach(element => {
        if (element.length > longestWord) {
            longestWord = element.length
        }
    })
    return longestWord
}

perf.start()        
findLongestWord(["hi", "hello"])
let runtime4 = perf.stop()

console.log(findLongestWord(["hi", "hello"]))
console.log(runtime4.preciseWords)

// RUNTIME:
// - 27.667 μs

// RUNTIME COMPLEXTY:
// - O(n)

// SPACE COMPLEXTIY:
// 0(1)