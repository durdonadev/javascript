// 1. Write a function that receives two arguments, start and end, and returns an array of numbers from start to end (inclusive).

// For instance, if start=11 and end=15, the function should return [11, 12, 13, 14, 15]. If start=15 and end=11, it should return [].
function arrRange(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(arrRange(11, 15));

// 2. Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by 7.

// For instance, if start=10 and end=49, the function should return [14, 21, 28, 35, 42, 49]. If start=1 and end=6, it should return [].
function arrDivisibleBy7(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(arrDivisibleBy7(10, 49));

// 3. Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by both 3 and 5.

// For instance, if start=1 and end=31, the function should return [15, 30]. If start=1 and end=14, it should return [].
function arrDivisibleBy3And5(start, end) {
    arr = [];
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(arrDivisibleBy3And5(1, 31));

// 4. Write a function that receives two positive arguments, start and end, and returns an array of positive numbers between start and end (inclusive) whose square is also within the same range (start to end).

// For instance, if start=1 and end=10, the function should return [1, 2, 3]. If start=4 and end=6, it should return [].
function arrSquareNumbers(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        var square = Math.pow(i, 2);
        if (square >= start && square <= end) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(arrSquareNumbers(1, 10));
console.log(arrSquareNumbers(4, 6));

// 5. Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

// For instance, if start=1 and end=16, the function should return [3, 5, 6, 9, 10, 12]. If start=17 and end=19, it should return [].
function arrDivisibleBy3Or5(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(arrDivisibleBy3Or5(1, 16));
