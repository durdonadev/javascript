// Task 1
function addTwo(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log("20 + 30 =", addTwo(20, 30));

// Task 2
function multiplyTwo(num1, num2) {
    var multiplication = num1 * num2;
    return multiplication;
}
console.log("10 * 40 =", multiplyTwo(10, 40));

// Task 3
function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log("Number 4 is odd:", isOdd(4));

// Task 4
function subtractTwo(num1, num2) {
    var substraction = num1 - num2;
    return substraction;
}
console.log("32 - 7 =", subtractTwo(32, 7));

// Task 5
function divideTwo(num1, num2) {
    if (num2 !== 0) {
        var devision = num1 / num2;
        return devision;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("35 / 7 =", divideTwo(35, 7));

// Task 6
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
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
console.log("Larger number of 32 and 21 is:", maxValue(32, 21));

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
console.log("Smaller number of 32 and 21 is:", minValue(32, 21));

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
console.log("Round value of -5.65732 is:", roundNumber(-5.65732));

// Task 11
function ceilNumber(num) {
    var result = Math.ceil(num);
    return result;
}
console.log("Ceil value of 23.45632 is:", roundNumber(23.45632));

// Task 12
function floorNumber(num) {
    var result = Math.floor(num);
    return result;
}
console.log("Floor value of 173.98632 is:", floorNumber(173.98632));

// Task 13
function modulus(num1, num2) {
    if (num2 !== 0) {
        var result = num1 % num2;
        return result;
    } else {
        return "Error: Division by zero is not allowed!";
    }
}
console.log("21 % 5 =", modulus(21, 5));

// Task 14
function power(num, exponent) {
    var result = Math.pow(num, exponent);
    return result;
}
console.log("Power value of numbers 4 and 5:", power(4, 5));

// Task 15
function squareRoot(num) {
    if (num >= 0) {
        var result = Math.sqrt(num);
        return result;
    } else {
        return "Error: Square root of negative number is not allowed!";
    }
}
console.log("Square root of 25:", squareRoot(25));
