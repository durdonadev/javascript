// Create a function threeAndFive that takes a number as argument and checks if this number devisible 4 and 7 at the same time.

function threeAndFive(num) {
    if (num % 4 === 0 && num % 7 === 0) {
        return true;
    } else return false;
}

console.log(threeAndFive(65));
console.log(threeAndFive(124));
console.log(threeAndFive(28));

// Create a function that takes two string, and returns the string that have more characters. "Hello", "Hi"

function longerString(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    } else if (str1.length === str2.length) {
        return "Strings are the same length!";
    } else {
        return str2;
    }
}

console.log(longerString("Hello", "Hi"));

// Create a function that takes three numbers and checks if the sum of the first two is greater than multification tha last two. 2 3 4 >>> 2+3 > 3*4

function greaterNum(num1, num2, num3) {
    if (num1 + num2 > num2 * num3) {
        return true;
    } else if (num1 + num2 === num2 * num3) {
        return "They are equal";
    } else {
        return false;
    }
}

console.log(greaterNum(9, 3, 4));
console.log(greaterNum(2, 3, 4));

// Create a function that takes two strings as argument and checks if this both string have letter e and a. "hello", "animal", "elephant", "apple"

function eAndA(str1, str2) {
    if (
        str1.includes("e") &&
        str1.includes("a") &&
        str2.includes("e") &&
        str2.includes("a")
    ) {
        return true;
    } else {
        return false;
    }
}

console.log(eAndA("elephant", "apple"));
console.log(eAndA("hello", "animal"));

// Create a function that takes two numbers and a string, and checks if the sum of two numbers is greater than the multipication second number and number of characters of the string. 2, 3, "hello"

function twoNumAndStr(num1, num2, str) {
    if (num1 + num2 > num2 * str.length) {
        return true;
    } else if (num1 + num2 === num2 * str.length) {
        return "Equal";
    } else {
        return false;
    }
}

console.log(twoNumAndStr(2, 3, "hello"));
console.log(twoNumAndStr(15, 3, "hello"));
console.log(twoNumAndStr(12, 3, "hello"));

// Create a function that takes three string and checks if the concatination of the first two equal to third one. "book", "school", "bookschool"

function threeStrings(str1, str2, str3) {
    if (`${str1}${str2}` === str3) {
        return true;
    } else {
        return false;
    }
}

console.log(threeStrings("book", "school", "bookschool"));
console.log(threeStrings("book", "school", "hello"));

// Create a function that takes a string anda number, and checks if the number of characters of the string twice a number. "hello!", 3

function strAndNum(str, num) {
    if (str.length === num * 2) {
        return true;
    } else {
        return false;
    }
}

console.log(strAndNum("hello!", 3));
console.log(strAndNum("hello", 3));
