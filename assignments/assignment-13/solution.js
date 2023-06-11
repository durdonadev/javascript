// 1
function combineArrays(arr1, arr2) {
    var result = arr1.concat(arr2);
    return result;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// 2
function reverseOrder(arr) {
    var result = arr.reverse();
    return result;
}
console.log(reverseOrder([1, 2, 3]));

// 3
function checkValue(arr, num) {
    var result = arr.includes(num);
    return result;
}
console.log(checkValue([1, 2, 3], 2));

// 4
function isArray(arr) {
    var result = Array.isArray(arr);
    return result;
}
console.log(isArray([1, 2, 3]));

// 5
function arraySlice(arr, num1, num2) {
    var result = arr.slice(num1, num2);
    return result;
}
console.log(arraySlice([1, 2, 3, 4, 5], 1, 4));

// 6
function removeLast(arr) {
    var lastElement = arr.pop();
    var result = arr;
    return result;
}
console.log(removeLast([1, 2, 3]));

// 7
function removeFirst(arr) {
    var lastElement = arr.shift();
    var result = arr;
    return result;
}
console.log(removeFirst([1, 2, 3]));

// 8
function addAtBeginning(arr, num) {
    var newLength = arr.unshift(num);
    var result = arr;
    return result;
}
console.log(addAtBeginning([1, 2, 3], 0));

// 9
function addAtEnd(arr, num) {
    var newLength = arr.push(num);
    var result = arr;
    return result;
}
console.log(addAtEnd([1, 2, 3], 4));
