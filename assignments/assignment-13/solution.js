// 1
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// 2
function reverseOrder(arr) {
    return arr.reverse();
}
console.log(reverseOrder([1, 2, 3]));

// 3
function checkValue(arr, num) {
    return arr.includes(num);
}
console.log(checkValue([1, 2, 3], 2));

// 4
function isArray(arr) {
    return Array.isArray(arr);
}
console.log(isArray([1, 2, 3]));

// 5
function arraySlice(arr, num1, num2) {
    return arr.slice(num1, num2);
}
console.log(arraySlice([1, 2, 3, 4, 5], 1, 4));

// 6
function removeLast(arr) {
    arr.pop();
    return arr;
}
console.log(removeLast([1, 2, 3]));

// 7
function removeFirst(arr) {
    arr.shift();
    return arr;
}
console.log(removeFirst([1, 2, 3]));

// 8
function addAtBeginning(arr, num) {
    arr.unshift(num);
    return arr;
}
console.log(addAtBeginning([1, 2, 3], 0));

// 9
function addAtEnd(arr, num) {
    arr.push(num);
    return arr;
}
console.log(addAtEnd([1, 2, 3], 4));
