// 1. Creating User Profiles:
const userProfile = {
    name: "Jane Doe",
    age: 28,
    email: "jane@example.com",
    isAdmin: false
};

function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}

// printUserProfile(userProfile);

// 2. Updating Inventory:

function addStock(inventory, newInventory) {
    for (let item in newInventory) {
        if (inventory[item] !== undefined) {
            inventory[item] += newInventory[item];
        } else {
            inventory[item] = newInventory[item];
        }
    }
    return inventory;
}

// console.log(
//     addStock({ apple: 5, banana: 3, orange: 2 }, { banana: 2, orange: 3 })
// );
// console.log(addStock({ apple: 10, orange: 5 }, { apple: 5, banana: 10 }));

// 3. Filtering Properties:

function filterData(object, key) {
    return { [key]: object[key] };
}

// console.log(
//     filterData(
//         {
//             city: "New York",
//             state: "New York",
//             country: "USA",
//             pincode: "10001"
//         },
//         "state"
//     )
// );
// console.log(
//     filterData(
//         {
//             city: "Los Angeles",
//             state: "California",
//             country: "USA",
//             pincode: "90001"
//         },
//         "city"
//     )
// );

// 4. Checking the Perfect Score:

function perfectScore(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score === 100) {
            return true;
        }
    }
    return false;
}

// console.log(
//     perfectScore([
//         { name: "John", score: 98 },
//         { name: "Jane", score: 90 },
//         { name: "Bob", score: 95 }
//     ])
// );
// console.log(
//     perfectScore([
//         { name: "Adam", score: 95 },
//         { name: "Eve", score: 99 }
//     ])
// );

// 5. Counting Occurrences:

function countOccurrence(str) {
    let countObj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (countObj[char]) {
            countObj[char]++;
        } else {
            countObj[char] = 1;
        }
    }
    return countObj;
}

// console.log(countOccurrence("banana"));
// console.log(countOccurrence("apple"));

// 6. Calculating Average Score:

// function averageScore(scores) {
//     let newObject = {};

//     for (let student in scores) {
//         let sumOfScore = 0;
//         let scoresArr = scores[student];

//         for (let i = 0; i < scoresArr.length; i++) {
//             sumOfScore += scoresArr[i];
//         }
//         let avarage = sumOfScore / scoresArr.length;
//         newObject[student] = avarage.toFixed(2);
//     }
//     return newObject;
// }

function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function averageScore(scores) {
    let averageScores = {};

    for (let student in scores) {
        let averageScore = calculateAverage(scores[student]);
        averageScores[student] = averageScore;
    }

    return averageScores;
}

// console.log(averageScore({ John: [85, 90, 78], Jane: [92, 88, 91] }));
// console.log(averageScore({ Adam: [80, 90, 85], Eve: [88, 92, 89] }));

// 7. Finding Largest Number:

function findLargest(ages) {
    let oldest = "";
    let maxAge = 0;

    for (let person in ages) {
        if (maxAge < ages[person]) {
            maxAge = ages[person];
            oldest = person;
        }
    }
    return oldest;
}

// console.log(findLargest({ John: 30, Jane: 32, Bob: 28 }));
// console.log(findLargest({ Adam: 35, Eve: 30, Abel: 33 }));

// 8. Reversing Key-Value Pairs:

function reverseKeyValue(object) {
    let reversed = {};
    for (let key in object) {
        reversed[object[key]] = key;
    }
    return reversed;
}

// console.log(reverseKeyValue({ name: "John", age: 30 }));
// console.log(reverseKeyValue({ city: "Los Angeles", state: "California" }));

// 9. Counting Boolean Values:

function countBooleans(array) {
    let countBooleans = { true: 0, false: 0 };
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            countBooleans.true++;
        } else {
            countBooleans.false++;
        }
    }
    return countBooleans;
}

console.log(countBooleans([true, false, true, true, false]));
console.log(countBooleans([true, true, false, false, false]));

// 10. Calculating Total Price:

function calculateTotal(prices, items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        total += prices[item];
    }
    return total;
}

console.log(
    calculateTotal({ apple: 1, banana: 0.5, orange: 0.75 }, ["apple", "banana"])
);
// console.log(
//     calculateTotal({ apple: 1, banana: 0.5, orange: 0.75 }, [
//         "orange",
//         "orange",
//         "banana"
//     ])
// );
