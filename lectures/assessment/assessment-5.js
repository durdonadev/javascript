/**
 * Assignment 1: Fizz Buzz
 * Write a function that takes a number as an argument.
 * The function should return "Fizz" if the number is a multiple of 3,
 * "Buzz" if the number is a multiple of 5,
 * "FizzBuzz" if the number is a multiple of both 3 and 5,
 * and the number itself if it is not a multiple of 3 or 5.
 *
 * Example:
 * fizzBuzz(9) should return "Fizz"
 * fizzBuzz(10) should return "Buzz"
 * fizzBuzz(15) should return "FizzBuzz"
 * fizzBuzz(7) should return 7
 */

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 !== 0) {
        return "Fizz";
    } else if (number % 5 === 0 && number % 3 !== 0) {
        return "Buzz";
    } else if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else {
        return number;
    }
}

// console.log(fizzBuzz(9));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(7));

/**
 * Assignment 2: Palindrome Checker
 * Write a function that takes a one word string as an argument and checks if it is a palindrome.
 * A palindrome is a word that reads the same backwards as forwards, ignoring case.
 * The function should return true if the word is a palindrome and false otherwise.
 *
 * Example:
 * isPalindrome("Level") should return true
 * isPalindrome("OpenAI") should return false
 */

function isPalindrome(string) {
    let reversedStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    if (string.toLowerCase() === reversedStr.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

// console.log(isPalindrome("Level"));
// console.log(isPalindrome("OpenAI"));

/**
 * Assignment 3: Array Filter
 * Write a function that takes an array of strings and a number as arguments.
 * The function should return a new array containing strings from the original array
 * that have a length less than or equal to the provided number.
 *
 * Example:
 * filterArray(["apple", "banana", "cherry", "dates", "elderberry", "cat"], 5)
 * should return ["apple", "dates", "cat"]
 */

function filterArray(array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let str = array[i];
        if (str.length <= number) {
            newArray.push(str);
        }
    }
    return newArray;
}

// console.log(
//     filterArray(["apple", "banana", "cherry", "dates", "elderberry", "cat"], 5)
// );

/**
 * Assignment 4: Array of Objects
 * Write a function that takes an array of strings as an argument.
 * The function should return a new array that contains objects.
 * Each object in the array should have a single property, with the key being
 * the string from the input array and the value being the square of the string's length.
 *
 * Example:
 * stringsToObjects(["cat", "window", "prop"])
 * should return [{cat: 9}, {window: 36}, {prop: 16}]
 */

function stringsToObjects(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let obj = {};
        obj[array[i]] = array[i].length * array[i].length;
        newArray.push(obj);
    }
    return newArray;
}

// console.log(stringsToObjects(["cat", "window", "prop"]));

/**
 * Assignment 5: Key-Value Multiplication
 * Write a function that takes an object as an argument. In this object, keys are strings and values are also strings.
 * The function should return a new object where each key is a combination of the original key and value,
 * and each value is the product of the number of characters in the key and the number of characters in the value.
 *
 * Example:
 * keyValueMultiplication({apple: "fruit", car: "vehicle"})
 * should return {"applefruit": 25, "carvehicle": 21}
 */

function keyValueMultiplication(obj) {
    let newObj = {};
    let newKey = "";
    for (const key in obj) {
        newKey = key + obj[key];
        newObj[newKey] = key.length * obj[key].length;
    }
    return newObj;
}

// console.log(keyValueMultiplication({ apple: "fruit", car: "vehicle" }));

/**
 * Assignment 6: Array Operations
 * Write a function that takes two arrays of equal length as arguments.
 * The function should return an object with two properties - 'added' and 'multiplied'.
 * The 'added' property should be an array that contains the result of adding each element at the same index
 * in the two input arrays.
 * The 'multiplied' property should be an array that contains the result of multiplying each element at the same index
 * in the two input arrays.
 *
 * Example:
 * arrayOperations([1, 2, 3], [4, 5, 6])
 * should return {added: [5, 7, 9], multiplied: [4, 10, 18]}
 */

function arrayOperations(arr1, arr2) {
    let obj = {
        added: [],
        multiplied: []
    };

    for (let i = 0; i < arr1.length; i++) {
        obj.added.push(arr1[i] + arr2[i]);
        obj.multiplied.push(arr1[i] * arr2[i]);
    }

    return obj;
}

console.log(arrayOperations([1, 2, 3], [4, 5, 6]));
