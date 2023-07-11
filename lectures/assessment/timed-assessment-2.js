// Function 1: compareCharCount
/*
Instruction: Create a function named compareCharCount that takes two strings and a character as input. 
This function should return true if the character count is equal in both strings, and false otherwise.
*/

function compareCharCount(str1, str2, char) {
    let countCharStr1 = 0;
    let countCharStr2 = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === char) {
            countCharStr1++;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === char) {
            countCharStr2++;
        }
    }

    return countCharStr1 === countCharStr2;
}

// console.log(compareCharCount("Hello", "World", "l")); // should return false
// console.log(compareCharCount("Hello", "World", "o")); // should return true
// console.log(compareCharCount("Hello", "Allo", "l")); // should return true
// console.log(compareCharCount("Hello", "Allo", "o")); // should return true

// Function 2: isGreaterOrEqual
/*
Instruction: Create a function named isGreaterOrEqual that takes a number up to 10 (inclusive) as an input. 
This function should generate a random number up to 10 (inclusive) and return true if the generated number 
is less than or equal to the input number, and false otherwise.
*/

function isGreaterOrEqual(num) {
    var randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("Random number:", randomNum);

    return num <= randomNum;
}

// console.log("Given number: 5 -", isGreaterOrEqual(5)); // could return true or false
// console.log("Given number: 7 -", isGreaterOrEqual(7)); // could return true or false
// console.log("Given number: 2 -", isGreaterOrEqual(2)); // could return true or false
// console.log("Given number: 9 -", isGreaterOrEqual(9)); // could return true or false

// Function 3: isPalindrome
/*
Instruction: Create a function named isPalindrome that takes a string as an input. 
The function should return true if the string is a palindrome, and false otherwise. 
String is one word string. Do not use array reverse method or do not create another string or array.
*/

function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// console.log(isPalindrome("heeeeh")); // should return true
// console.log(isPalindrome("hello")); // should return false
// console.log(isPalindrome("level")); // should return true
// console.log(isPalindrome("world")); // should return false

// Function 4: reverseArrayInPlace
/*
Instruction: Create a function named reverseArrayInPlace that takes an array as an input. 
This function should return the given array, but reversed in place. Do not use array reverse method, 
do not create another array.
*/

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // 5/2 = 2   0,1,2,3,4
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]; // arr[0]= arr[4], arr[1]= arr[3], arr[2]= arr[2]
        arr[arr.length - 1 - i] = temp; // arr[4]= arr[0], arr[3]= arr[1], arr[2]= arr[2]
    }
    return arr;
}
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // should return [5, 4, 3, 2, 1]
// console.log(reverseArrayInPlace([6, 7, 8, 9, 10])); // should return [10, 9, 8, 7, 6]
// console.log(reverseArrayInPlace(["a", "b", "c", "d", "e"])); // should return ['e', 'd', 'c', 'b', 'a']

// Function 5: removeDuplicates
/*
Instruction: Create a function named removeDuplicates that takes an array of numbers as an input. 
This function should return a new array that has all duplicates removed. Do not use indexOf or includes methods of string/array
*/

function removeDuplicates(numbers) {
    let uniqueNums = {};

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (!uniqueNums[num]) {
            uniqueNums[num] = num;
        }
    }
    return Object.values(uniqueNums);
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // should return [1, 2, 3, 4, 5]
// console.log(removeDuplicates([6, 7, 7, 8, 9, 9, 10])); // should return [6, 7, 8, 9, 10]
// console.log(removeDuplicates(["a", "a", "b", "b", "c", "c", "d", "d"])); // should return ['a', 'b', 'c', 'd']

// Function 6: areAnagrams
/*
Instruction: Create a function named areAnagrams that takes two equal length strings as inputs. 
The function should return true if the two strings are anagrams of each other (i.e., if the second string 
can be created by rearranging the letters of the first string), and false otherwise.
*/

// function areAnagrams(str1, str2) {
//     for (let i = 0; i < str1.length; i++) {
//         return str2.includes(str1[i]);
//     }
// }

function areAnagrams(str1, str2) {
    let frequency1 = {};
    let frequency2 = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (frequency1[char]) {
            frequency1[char]++;
        } else {
            frequency1[char] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (frequency2[char]) {
            frequency2[char]++;
        } else {
            frequency2[char] = 1;
        }
    }
    for (let char in frequency1) {
        if (frequency1[char] !== frequency2[char]) {
            return false;
        }
    }
    return true;
}

// console.log(areAnagrams("listen", "silent")); // should return true
// console.log(areAnagrams("hello", "world")); // should return false
// console.log(areAnagrams("elbow", "below")); // should return true
// console.log(areAnagrams("apple", "papel")); // should return true
