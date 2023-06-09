// Task 1
function lengthOfString(str) {
    var result = str.length;
    return result;
}

// Task 2
function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

// Task 3
function toUpperCase(str) {
    var result = str.toUpperCase();
    return result;
}

// Task 4
function toLowerCase(str) {
    var result = str.toLowerCase();
    return result;
}

// Task 5
function findSubstring(str, sub) {
    var result = str.includes(sub);
    return result;
}

// Task 6
function replaceSubstring(str, sub1, sub2) {
    var result = str.replace(sub1, sub2);
    return result;
}

// Task 7
function charAtPosition(str, position) {
    var result = str[position];
    //var result = str.charAt(position);
    return result;
}

// Task 8
function trimString(str) {
    var result = str.trim();
    return result;
}

// Task 9
function stringStartsWith(str, sub) {
    var result = str.startsWith(sub);
    return result;
}

// Task 10
function stringEndsWith(str, sub) {
    var result = str.endsWith(sub);
    return result;
}

// Task 11
function convertStringToNumber(str) {
    //var result = parseInt(str);
    var result = Number(str);
    return result;
}

// Task 12
function sliceString(str, startIndx, endIndx) {
    var result = str.slice(startIndx, endIndx);
    return result;
}

// Task 13
function concatenateAndToUpper(str1, str2) {
    var result = (str1 + str2).toUpperCase();
    // var result = str1.concat(str2).toUpperCase();
    return result;
}

console.log("1.", lengthOfString("Hello"));
console.log("2.", concatenateStrings("Hello", "World"));
console.log("3.", toUpperCase("hello"));
console.log("4.", toLowerCase("HELLO"));
console.log("5.", findSubstring("Hello World", "World"));
console.log("6.", replaceSubstring("Hello World", "World", "Everyone"));
console.log("7.", charAtPosition("Hello", 1));
console.log("8.", trimString(" Hello "));
console.log("9.", stringStartsWith("Hello", "He"));
console.log("10.", stringEndsWith("Hello", "lo"));
console.log("11.", convertStringToNumber("12.34"));
console.log("12.", sliceString("Hello World", 0, 5));
console.log("13.", concatenateAndToUpper("hello", "world"));
