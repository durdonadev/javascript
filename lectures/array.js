var emptyArray = [];
var fruits = ["apple", "banana", "cherry"];

console.log(emptyArray);
console.log(fruits);

var friends = new Array();
var animals = new Array("cat", "dog", "hourse");

console.log(friends);
console.log(animals);

var arrayFruits = ["apple", "banana", "cherry"];
console.log(arrayFruits[0]);
console.log(arrayFruits[1]);
console.log(arrayFruits[arrayFruits.length - 1]);

arrayFruits[0] = "orange";
console.log(arrayFruits);

var arr = ["Alice", "Bob", "Charlie"];
var newLength1 = arr.push("David");
console.log(arr);
console.log(newLength1);

var newLength2 = arr.unshift("Martin");
console.log(arr);
console.log(newLength2);

var lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

var firstElement = arr.shift();
console.log(arr);
console.log(firstElement);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2, arr1);
console.log(arr3);
console.log(arr1);

console.log(arr3.includes(2));
console.log(arr3.includes(7));

var arr4 = [1, 2, 3, 4];
var notArr = "Hello";
console.log(Array.isArray(arr4));
console.log(Array.isArray(notArr));

var arr5 = ["a", "b", "c", "d"];
arr5.reverse();
console.log(arr5);

var arr6 = [1, 2, 3, 4];
// console.log(arr6.toReversed());
console.log(arr6);

var allFruits = ["apple", "banana", "mango", "grape", "orange"];
var citrus = allFruits.slice(2, 4);
console.log(citrus);
var softFruits = allFruits.slice(1);
console.log(softFruits);
var lastTwo = allFruits.slice(-2);
console.log(lastTwo);
