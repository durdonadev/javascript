// Task 1
var userName;
var randomNumber1 = Math.floor(Math.random() * 10) + 1;
console.log("1. Random number between 1 and 10:", randomNumber1);
if (randomNumber1 >= 1 && randomNumber1 <= 3) {
    userName = "Bob";
} else if (randomNumber1 >= 4 && randomNumber1 <= 7) {
    userName = "Martin";
} else {
    userName = "Jennifer";
}
console.log("Name:", userName);

// Task 2
var randomNumber2 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
console.log("2. Random number between 1 and 4:", randomNumber2);
if (randomNumber2 === 1) {
    console.log(
        `Dear ${userName}, wishing you a day filled with happiness and a year filled with joy.`
    );
} else if (randomNumber2 === 2) {
    console.log(
        `Dear ${userName}, sending you smiles for every moment of your special day.`
    );
} else if (randomNumber2 === 3) {
    console.log(
        `Dear ${userName}, have a wonderful time and a very happy day!`
    );
} else {
    console.log(
        `Dear ${userName}, hope your special day brings you all that your heart desires!`
    );
}
