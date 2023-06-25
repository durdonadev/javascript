// Create a function that takes an array of students ages enrolled into bootcamp. Find and returns the average age of the students.

function studentsAverageAge(ages) {
    let sumOfAges = 0;
    let avarageAge;
    for (let i = 0; i < ages.length; i++) {
        sumOfAges = sumOfAges + ages[i];
    }
    avarageAge = sumOfAges / ages.length;
    return avarageAge;
}

console.log(studentsAverageAge([24, 23, 18, 50])); // 28.75
