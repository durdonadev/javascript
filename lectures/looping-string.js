// 1. Write a function findCharFrequency that accepts a string and a character as arguments. This function should iterate through the string using a for loop and count the frequency of the specified character, then return this count.
function findCharFrequency(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(
    "How many character -l in the string - hello world:",
    findCharFrequency("hello world", "l")
);

// 2. Create a function vowelCounter that takes in a string and returns the count of vowels in it.
function vowelCounter(str) {
    var count = 0;
    var vowels = "aeiou";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(
    "How many vowels in the word - beautiful:",
    vowelCounter("beautiful")
);

// 3. Create a function isAlphaNumeric that checks whether a given string only contains English letters and digits.
function isAlphaNumeric(str) {
    var englishLettersDigits = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < str.lenght; i++) {
        if (!englishLettersDigits.includes(str[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

console.log(
    "Is the string alphanumeric - hello456:",
    isAlphaNumeric("hello456")
);
console.log(
    "Is the string alphanumeric - hello456%7:",
    isAlphaNumeric("hello456%7")
);

// 4. Write a function isAllVowels that verifies if a string consists only of vowel characters.
function isAllVowel(str) {
    var count = 0;
    var vowels = "aeiou";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    if (count === str.length) {
        return true;
    } else {
        return false;
    }
}
console.log(
    "Is the string consists only of vowel characters - ueoa:",
    isAllVowel("ueoa")
); // 4 => true. if number of vowels is equal to str.length => true;
console.log(
    "Is the string consists only of vowel characters - aaaooiiieekj:",
    isAllVowel("aaaooiiieekj")
); // 2 => false

// 4. Write a function isAllVowels that verifies if a string consists only of vowel characters.
function isAllVowel2(str) {
    var consonants = "qwertypsdfghjklzxvbnm";
    for (var i = 0; i < str.length; i++) {
        if (!consonants.includes(str[i])) {
            return true;
        }
    }
    return false;
}
console.log(
    "Is the string consists only of vowel characters - aueo:",
    isAllVowel2("aueo")
);

// 5. Construct a function capitalizeVowels that changes all vowels in a lowercase string to uppercase.
function capitalizeVowels(str) {
    var result = "";
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.includes(char)) {
            result = result + char.toUpperCase();
        } else {
            result = result + char;
        }
    }
    return result;
}
console.log(
    "Changes all vowels in a lowercase string to uppercase - hello:",
    capitalizeVowels("hello")
);

// 6. Build a function sliceFromFirstVowel that returns a substring starting from the first vowel to the end of the original string.
function sliceFromFirstVowel(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var vowels = "aeiou";
        if (vowels.includes(char)) {
            return str.slice(i);
        }
    }
    return "There is no vowels in this string";
}
console.log(
    "A substring starting from the first vowel to the end of the original string - javascript:",
    sliceFromFirstVowel("javascript")
);

// 7. Create a function areConsonantsMore that returns true if the number of consonants in a string is higher than the number of vowels.
function areConsonantsMore(str) {
    var countVowel = 0;
    var countConsonants = 0;
    var vowels = "aeiou";
    var consonants = "qwertypsdfghjklzxvbnm";
    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            countVowel++;
        } else {
            countConsonants++;
        }
    }
    return countConsonants > countVowel;
}
console.log(
    "Is consonants in a string is more than the vowels - boolean:",
    areConsonantsMore("boolen")
);
console.log(
    "Is consonants in a string is more than the vowels - javascript:",
    areConsonantsMore("javascript")
);

// 8. Implement a function doubleVowels that doubles all the vowels in a given string.
