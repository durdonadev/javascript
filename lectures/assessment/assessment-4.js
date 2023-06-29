// Create a function that takes an array of Numbers. Return the greatest number from array.
// Input  : [45, 56, -19, 900, -345, 0, 67, 30]
// Output : 900

function findGreatestNumber(numbers) {
    let greatestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (greatestNumber < numbers[i]) {
            greatestNumber = numbers[i];
        }
    }
    return greatestNumber;
}
// console.log(findGreatestNumber([45, 56, -19, 900, -345, 0, 67, 30]));

function findSmallestNumber(numbers) {
    let smallestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (smallestNumber > numbers[i]) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}
// console.log(findSmallestNumber([45, 56, -19, 900, -345, 0, 67, 30]));

// Create a function that takes the same size(length) two  arrays. Return true if both arrays are structural the same.
// Input: [1,2,3], [1,2,3] => Output: true
// Input: [1,2,4], [1,2,3] => Output: false

function isSameArr(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// console.log(isSameArr([1, 2, 3], [1, 2, 3]));
// console.log(isSameArr([1, 2, 4], [1, 2, 3]));

// Create a function that takes two objects it can be different sizes, check if both objects structural the same
// Input: {a:1, b:2, c:5} {c:5, b:2, a:1} Output: true

function isSameObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    // for (const key in obj2) {
    //     if (obj2[key] !== obj1[key]) {
    //         return false;
    //     }
    // }

    return true;
}
const obj = { a: 1 };
obj.a;
console.log(isSameObj({ a: 1, b: 2, c: 5 }, { c: 5, b: 2, a: 1 }));
console.log(isSameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 4 }));
console.log(isSameObj({ a: 1, b: 2, d: 5, c: 6 }, { a: 1, b: 2, d: 5, f: 6 }));
console.log(isSameObj({ a: 1, b: 2, d: 5, c: 6 }, { a: 1, b: 2, d: 5 }));
console.log(isSameObj({ a: 1, b: 2, d: 5 }, { a: 1, b: 2, d: 5, c: 5 }));
