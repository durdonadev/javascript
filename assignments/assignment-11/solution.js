// Task 1
function addTwo(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log("3 + 5 =", addTwo(3, 5));

// Task 2
function multiplyTwo(num1, num2) {
    var multiplication = num1 * num2;
    return multiplication;
}
console.log("2 * 3 =", multiplyTwo(2, 3));

// Task 3
function isOdd(num) {
    var result = num % 2 !== 0;
    return result;
}
console.log("Number 5 is odd:", isOdd(5));

// Task 4
function subtractTwo(num1, num2) {
    var substraction = num1 - num2;
    return substraction;
}
console.log("9 - 2 =", subtractTwo(9, 2));

// Task 5
function divideTwo(num1, num2) {
    if (num2 !== 0) {
        var devision = num1 / num2;
        return devision;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("10 / 2 =", divideTwo(10, 2));

// Task 6
function isEven(num) {
    var result = num % 2 === 0;
    return result;
}
console.log("Number 4 is even:", isEven(4));

// Task 7
function maxValue(num1, num2) {
    var result;
    if (num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}
console.log("Larger number of 3 and 7 is:", maxValue(3, 7));

// Task 8
function minValue(num1, num2) {
    var result;
    if (num1 < num2) {
        result = num1;
    } else {
        result = num2;
    }
    return result;
}
console.log("Smaller number of 3 and 7 is:", minValue(3, 7));

// Task 9
function absoluteValue(num) {
    var result = Math.abs(num);
    return result;
}
console.log("Absolute value of -5 is:", absoluteValue(-5));

// Task 10
function roundNumber(num) {
    var result = Math.round(num);
    return result;
}
console.log("Round value of 4.5 is:", roundNumber(4.5));

// Task 11
function ceilNumber(num) {
    var result = Math.ceil(num);
    return result;
}
console.log("Ceil value of 4.1 is:", roundNumber(4.1));

// Task 12
function floorNumber(num) {
    var result = Math.floor(num);
    return result;
}
console.log("Floor value of 4.9 is:", floorNumber(4.9));

// Task 13
function modulus(num1, num2) {
    if (num2 !== 0) {
        var result = num1 % num2;
        return result;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("10 % 3 =", modulus(21, 5));

// Task 14
function power(num, exponent) {
    var result = Math.pow(num, exponent);
    return result;
}
console.log("2^3 = ", power(2, 3));

// Task 15
function squareRoot(num) {
    if (num >= 0) {
        var result = Math.sqrt(num);
        return result;
    } else {
        return "Error: Square root of negative number is not allowed!";
    }
}
console.log("√9 =", squareRoot(9));
