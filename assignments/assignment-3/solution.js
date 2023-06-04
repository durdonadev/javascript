// Part 1: Basic Arithmetic Operations
var num1 = 10;
var num2 = 20;
console.log("num1 =", num1);
console.log("num2 =", num2);

var addition = num1 + num2;
console.log("num1 + num2 =", addition);
var substraction = num1 - num2;
console.log("num1 - num2 =", substraction);
var multiply = num1 * num2;
console.log("num1 * num2 =", multiply);
var division = num1 / num2;
console.log("num1 / num2 =", division);

// Part 2: Temperature Converter

var fahrenheit1 = 350;
var celsius1 = (fahrenheit1 - 32) * (5 / 9);

console.log("F =", fahrenheit1);
console.log("C =", celsius1);

var celsius2 = 180;
var fahrenheit2 = celsius2 * (9 / 5) + 32;

console.log("C =", celsius2);
console.log("F =", fahrenheit2);

// Part 3: Interest Calculator

var principal = 10000;
var rate = 3.5;
var time = 5;
var interest = (principal * rate * time) / 100;
console.log("Interest =", interest);

// Part 4: Swapping Values

var a = 35;
var b = 15;

a = a + b;
b = a - b;

console.log("a =", a);
console.log("b =", b);
