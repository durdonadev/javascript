/* 1. Create a function splitByComma(str) that takes a string str as an argument. This function should split the input string into an array by using a comma as the delimiter.
Example Input: "apple,banana,grape"
Example Output: ["apple", "banana", "grape"]
Example Input: "red,green,blue,yellow"
Example Output: ["red", "green", "blue", "yellow"] */
function splitByComma(str) {
    let wordsArr = str.split(",");
    console.log(wordsArr);
}
splitByComma("apple,banana,grape");
splitByComma("red,green,blue,yellow");
console.log("----------------");

/* 2. Create a function joinWithDash(arr) that takes an array arr as an argument. The function should join all the elements of the array into a single string with each element separated by a dash "-".
Example Input: ["sun", "moon", "stars"]
Example Output: "sun-moon-stars"
Example Input: ["quick", "brown", "fox"]
Example Output: "quick-brown-fox" */
function joinWithDash(arr) {
    let wordsStr = arr.join("-");
    console.log(wordsStr);
}
joinWithDash(["sun", "moon", "stars"]);
joinWithDash(["quick", "brown", "fox"]);
console.log("----------------");

/* 3. Create a function splitSentenceIntoWords(sentence) that takes a sentence as an argument. The function should split the sentence into an array of words. Assume words in the sentence are separated by spaces.
Example Input: "The quick brown fox"
Example Output: ["The", "quick", "brown", "fox"]
Example Input: "Hello World from JavaScript"
Example Output: ["Hello", "World", "from", "JavaScript"] */
function splitSentenceIntoWords(sentence) {
    let words = sentence.split(" ");
    console.log(words);
}
splitSentenceIntoWords("The quick brown fox");
splitSentenceIntoWords("Hello World from JavaScript");
console.log("----------------");

/* 4. Create a function createCamelCase(str) that takes a string str as an argument. The string contains words separated by spaces. The function should return a camelCase version of the string.
Example Input: "Hello world"
Example Output: "helloWorld"
Example Input: "first name"
Example Output: "firstName" */
function createCamelCase(str) {
    let wordsArr = str.split(" ");
    let camelCase = wordsArr[0].toLowerCase();

    for (var i = 1; i < wordsArr.length; i++) {
        var word = wordsArr[i];
        var capitalizedWord =
            word[0].toUpperCase() + word.slice(1).toLowerCase();
        camelCase += capitalizedWord;
    }

    return camelCase;
}

console.log(createCamelCase("Hello world"));
console.log(createCamelCase("first name"));
console.log("----------------");

/* 5. Create a function splitAndReverse(str, separator) that takes a string str and a separator as arguments. The function should split the string using the separator, reverse the obtained array and then join it back into a string using the separator.
Example Input: ("one-two-three", "-")
Example Output: "three-two-one"
Example Input: ("front middle back", " ")
Example Output: "back middle front" */
function splitAndReverse(str, separator) {
    let wordsArr = str.split(separator);
    let reversedArr = wordsArr.reverse();

    let reversedStr = reversedArr.join(separator);
    return reversedStr;
}

console.log(splitAndReverse("one-two-three", "-"));
console.log(splitAndReverse("front middle back", " "));
console.log("----------------");

/* 6. Create a function replaceSpacesWithUnderscore(str) that takes a string str as an argument. The function should replace all spaces in the string with underscores.
Example Input: "Hello world"
Example Output: "Hello_world"
Example Input: "OpenAI GPT-4 rocks"
Example Output: "OpenAI_GPT-4_rocks" */
function replaceSpacesWithUnderscore(str) {
    let words = str.split(" ");
    return words.join("_");
}

console.log(replaceSpacesWithUnderscore("Hello my world"));
console.log(replaceSpacesWithUnderscore("OpenAI GPT-4 rocks"));
console.log("----------------");

/* 7. Create a function splitByMultipleCharacters(str, characters) that takes a string str and an array of characters as arguments. This function should split the string each time one of the characters in the array is encountered.
Example Input: ("apple-orange-banana", ["-", "a"])
Example Output: ["", "pple", "or", "nge", "b", "n", "n", ""]
Example Input: ("red,green,blue", [",", "e"])
Example Output: ["r", "d", "gr", "", "n", "blu", ""] */
function splitByMultipleCharacters(str, characters) {
    let result = [str];
    for (var i = 0; i < characters.length; i++) {
        var newArr = [];
        for (var j = 0; j < result.length; j++) {
            var splitArr = result[j].split(characters[i]);
            newArr = newArr.concat(splitArr);
        }

        result = newArr;
    }
    return result;
}

console.log(splitByMultipleCharacters("apple-orange-banana", ["-", "a"]));
console.log(splitByMultipleCharacters("red,green,blue", [",", "e"]));
console.log("----------------");

/* 8. Create a function countWordsInSentence(sentence) that takes a sentence as an argument and returns the number of words in the sentence. Assume words are separated by a single space.
Example Input: "The quick brown fox"
Example Output: 4
Example Input: "Hello World from JavaScript"
Example Output: 4 */
function countWordsInSentence(sentence) {
    let wordsArr = sentence.split(" ");
    return wordsArr.length;
}

console.log(countWordsInSentence("The quick brown fox"));
console.log(countWordsInSentence("Hello World from JavaScript"));
console.log("----------------");

/* 9. Create a function swapFirstAndLastName(fullName) that takes a string fullName which has first name and last name separated by a space. The function should return a string where the last name comes before the first name, separated by a comma.
Example Input: "John Doe"
Example Output: "Doe, John"
Example Input: "Alice Wonderland"
Example Output: "Wonderland, Alice" */
function swapFirstAndLastName(fullName) {
    let arr = fullName.split(" ");
    let swappedName = arr.join(", ");
    return swappedName;
}

console.log(swapFirstAndLastName("John Doe"));
console.log(swapFirstAndLastName("Alice Wonderland"));
console.log("----------------");

/* 10. Create a function createHashtag(str) that takes a string str as an argument and returns a hashtag version of it. Words should be joined with no spaces and every word should start with a capital letter.
Example Input: "hello world"
Example Output: "#HelloWorld"
Example Input: "OpenAI is awesome"
Example Output: "#OpenAIIIsAwesome" */
function createHashtag(str) {
    let arr = str.split(" ");
    let arrWithHash = ["#"];
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        var capitalizedWord = word[0].toUpperCase() + word.slice(1);
        arrWithHash.push(capitalizedWord);
    }
    return arrWithHash.join("");
}

console.log(createHashtag("hello world"));
console.log(createHashtag("OpenAI is awesome"));
