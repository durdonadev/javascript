// Write a function that takes two arguments start and end. And returns the count of numbers between start and end that are devisible by 4 and 14.
function fourAndFourteen(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 4 === 0 && i % 14 === 0) {
            counter = counter + 1;
        }
    }
    return counter;
}

//console.log(fourAndFourteen(1, 60));

// Write a function that takes two arguments start and end that returns count of numbers which the square also the same range.
// 20, 500   (400, 441, 484)
function squareCount(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        var square = i * i;
        if (square >= start && square <= end) {
            counter = counter + 1;
        } else {
            break;
        }
    }
    return counter;
}
//console.log(squareCount(20, 500));

// Write a function that takes two arguments, start and end, and returns the count of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.
function threeOrFive(start, end) {
    var counter = 0;
    for (var i = start; i < end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter = counter + 1;
        }
    }
    return counter;
}
//console.log(threeOrFive(1, 60));

// Write a function that receives two arguments, start and end, and returns an array of numbers between start and end (inclusive) that are divisible by either 3 or 5, but not both simultaneously.

function divisibleByThreeOrFive(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(divisibleByThreeOrFive(1, 100));
