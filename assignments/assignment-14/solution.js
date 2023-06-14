// 1. Write a function that prints numbers from 11 to 99. The numbers should be printed in ascending order, i.e., starting from 11 and ending at 99.
// 11, 12, 13, ..., 99
function printNum() {
    for (i = 11; i <= 99; i++) {
        console.log(i);
    }
}
//printNum();

// 2. Write a function that prints all numbers between 6 and 76 that are divisible by 7.
// 7, 14, 21, ..., 70
function divisibleBySeven() {
    for (i = 6; i <= 76; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}
//divisibleBy7();

// 3. Write a a function that prints all numbers between 1 and 99 that are divisible by both 3 and 5 at the same time.
function divisibleByThreeAndFive() {
    for (i = 1; i <= 99; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}
//divisibleByThreeAndFive();

// 4. Write a function that calculates and prints the squares of all numbers between 20 and 40.
// 20^2, 21^2, 23^2, ..., 40^2
function squaresOfNumbers() {
    for (i = 20; i <= 40; i++) {
        console.log(Math.pow(i, 2));
    }
}
//squaresOfNumbers();

// 5. Write a function that prints all numbers between 1 and 99 that are divisible by either 3 or 5, but not both at the same time.
// 3, 5, 6, 9, 10, ...,95, 96, 99
function divisibleByThreeOrFive() {
    for (i = 1; i <= 99; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            console.log(i);
        }
    }
}
//divisibleByThreeOrFive();
