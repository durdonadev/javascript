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

//printUserProfile(userProfile);

// 2. Updating Inventory:

function addStock(inventory, newInventory) {
    for (const fruit in newInventory) {
        //if (inventory[fruit] !== undefined) {
        if (inventory[fruit]) {
            inventory[fruit] += newInventory[fruit];
        } else {
            inventory[fruit] = newInventory[fruit];
        }
    }
    return inventory;
}

// console.log(
//     addStock({ apple: 5, banana: 3, orange: 2 }, { grapes: 3, peach: 5 })
// );
// console.log(addStock({ apple: 10, orange: 5 }, { apple: 5, banana: 10 }));

// 3. Filtering Properties:

function filterData(object, key) {
    // let filteredData = {};
    // // filteredData[key] = object[key];

    // for (const data in object) {
    //     if (data === key) {
    //         filteredData[data] = object[data];
    //     }
    // }
    // return filteredData;
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
//         { name: "Jane", score: 100 },
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
    let countChars = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (countChars[char]) {
            countChars[char]++;
        } else {
            countChars[char] = 1;
        }
    }
    return countChars;
}

// console.log(countOccurrence("banana"));
// console.log(countOccurrence("apple"));

// 6. Calculating Average Score:

function averageScore(scores) {
    const studentsAvarageScore = {};

    for (let student in scores) {
        let sumOfScore = 0;
        const scoresArr = scores[student];

        for (let i = 0; i < scoresArr.length; i++) {
            sumOfScore += scoresArr[i];
        }
        const avarage = sumOfScore / scoresArr.length;
        studentsAvarageScore[student] = avarage.toFixed(2);
    }
    return studentsAvarageScore;
}

// console.log(averageScore({ John: [85, 90, 78], Jane: [92, 88, 91] }));
// console.log(averageScore({ Adam: [80, 90, 85], Eve: [88, 92, 89] }));

// 7. Finding Largest Number:

function findLargest(ages) {
    let agesArr = Object.values(ages);
    let oldestAge = agesArr[0];
    let oldestPerson;

    for (let i = 0; i < agesArr.length; i++) {
        if (oldestAge < agesArr[i]) {
            oldestAge = agesArr[i];
        }
    }
    for (const person in ages) {
        if (ages[person] === oldestAge) {
            oldestPerson = person;
        }
    }

    return oldestPerson;
}

console.log(findLargest({ John: 30, Jane: 32, Bob: 28 }));
console.log(findLargest({ Adam: 35, Eve: 30, Abel: 33 }));

// 8. Reversing Key-Value Pairs:

function reverseKeyValue(object) {
    let newObject = {};

    for (let key in object) {
        let value = object[key];
        newObject[value] = key;
    }

    return newObject;
}

// console.log(reverseKeyValue({ name: "John", age: 30 }));
// console.log(reverseKeyValue({ city: "Los Angeles", state: "California" }));

// 9. Counting Boolean Values:

function countBooleans(array) {
    const countBooleansObj = {};
    let trueCounter = 0;
    let falseCounter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            trueCounter++;
        } else if (array[i] === false) {
            falseCounter++;
        }
        countBooleansObj.true = trueCounter;
        countBooleansObj.false = falseCounter;
    }

    return countBooleansObj;
}

// OR

// function countBooleans(array) {
//     const countBooleansObj = {
//       true: 0,
//       false: 0
//     };

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === true) {
//         countBooleansObj.true++;
//       } else if (array[i] === false) {
//         countBooleansObj.false++;
//       }
//     }

//     return countBooleansObj;
//   }

// console.log(countBooleans([true, false, true, true, false]));
// console.log(countBooleans([true, true, false, false, false]));

// 10. Calculating Total Price:

// function calculateTotal(prices, items) {
//     let total = 0;

//     for (let i = 0; i < items.length; i++) {
//         let item = items[i];

//         if (Object.keys(prices).includes(item)) {
//             total += prices[item];
//         }
//     }
//     return total;
// }

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
