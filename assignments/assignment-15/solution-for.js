// 1. Write a function that takes two arguments, start and end, and returns the count of numbers from start to end (inclusive).

// For example, if start=11 and end=15, the function should return 5.
function countNum(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        counter++;
    }
    // return end - start +1;
    return counter;
}
console.log(countNum(11, 15));

// 2. Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by 7.

// For example, if start=10 and end=49, the function should return 6 (14, 21, 28, 35, 42, and 49 are divisible by 7).
function divisibleBy7(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            counter++;
        }
    }
    return counter;
}
console.log(divisibleBy7(10, 49));

// 3. Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by both 3 and 5 at the same time.

// For example, if start=1 and end=31, the function should return 2 (15 and 30 are divisible by both 3 and 5).
function divisibleBy3And5(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter++;
        }
    }
    return counter;
}
console.log(divisibleBy3And5(1, 31));

// 4. Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) for which the square is also within the same range (start to end).

// For example, if start=1 and end=10, the function should return 3 (1, 2, and 3 have squares within the range).
function squareCount(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        var square = Math.pow(i, 2);
        if (square >= start && square <= end) {
            counter++;
        }
    }
    return counter;
}
console.log(squareCount(1, 10));

// 5. Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

// For example, if start=1 and end=16, the function should return 6 (3, 5, 6, 9, 10, and 12 are divisible by either 3 or 5 but not both simultaneously).
function divisibleBy3Or5(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 == 0)) {
            counter++;
        }
    }
    return counter;
}
console.log(divisibleBy3Or5(1, 16));
