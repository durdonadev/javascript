// 1. Character Pairing: Write a function that accepts a string and returns all possible pairs of characters in the input string. For this, use a nested loop to go through each possible pair of characters.

function characterPairs(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            result.push(str[i] + str[j]);
        }
    }
    return result;
}

console.log(characterPairs("abc"));
// Expected output: ['ab', 'ac', 'bc']

// 2. Divisible by Three Pair Sum: Create a )function divisibleByThreePairSum(array that takes an array of numbers as input. It should return an array of all the pairs of indices, where the elements sum to a multiple of three. This task will require a nested loop to go through each possible pair of numbers.

function divisibleByThreePairSum(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // let indecesPair = []
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % 3 === 0) {
                let indecesPair = [i, j];
                result.push(indecesPair);
            }
        }
    }
    return result;
}

console.log(divisibleByThreePairSum([1, 2, 3, 4, 5]));
// Expected output: [[0, 1], [0, 4], [1, 3], [3, 4]]

// 3. Sum of Pairs: Construct a function that takes an array and a target sum as inputs. The function should return all pairs of numbers in the array that sum up to the target. A nested loop will be necessary to examine all possible pairs of numbers.

function sumOfPairs(arr, num) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 5) {
                let sumPair = [arr[i], arr[j]];
                result.push(sumPair);
            }
        }
    }
    return result;
}

console.log(sumOfPairs([1, 2, 3, 4, 5], 5));
// Expected output: [[1, 4], [2, 3]]

// 4. Check Prime: Design a function that receives a number as input and checks if it is a prime number. This task will require a loop to check all numbers up to the number of the input number to see if they divide the input number evenly.

function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(7));
// Expected output: true
console.log(checkPrime(1));
// Expected output: false

// 5. Prime Range: Generate a function that accepts a range (two numbers) as input and returns an object. The object should contain the keys primes (an array of all prime numbers in the range) and count (the total number of prime numbers in the range). This task will require nested loops; an outer loop to iterate through the range, and an inner loop (within the checkPrime function) to check if a number is prime.

function primeRange(arr) {
    let primesAndCount = {};
    let primes = [];
    for (let i = arr[0] + 1; i < arr[1]; i++) {
        if (checkPrime(i)) {
            primes.push(i);
        }
    }
    primesAndCount.primes = primes;
    primesAndCount.count = primes.length;
    return primesAndCount;
}

console.log(primeRange([10, 20]));
// Expected output: {primes: [11, 13, 17, 19], count: 4}

// 6. All Substrings: Write a function that takes a string as an input and returns an array of all its substrings.

function allSubstrings(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        //0,1,2
        for (let j = i + 1; j <= str.length; j++) {
            let subStr = str.slice(i, j); // i=0, j=1 >> 'a'; i=0, j=2 >> 'ab'; i=0, j=3 >> 'abc'
            // i=1, j=2 >> 'b'; i=1, j=3 >> 'bc'
            // i=2, j=3 >> 'c'
            result.push(subStr);
        }
    }
    return result;
}

console.log(allSubstrings("abc"));
// Expected output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
