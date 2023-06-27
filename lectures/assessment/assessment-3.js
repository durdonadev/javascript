// Create a function that takes an array of student object. { name: "Ali", grades: ["A", "F", "B"]} and returns number of students that got straight "A"s.
const arr = [
    { name: "Ann", grades: ["A", "A", "A"] },
    { name: "John", grades: ["C", "C", "A"] },
    { name: "Smith", grades: ["A", "A", "A"] }
];

function studentsGrade(arr) {
    countOfStraightA = 0;
    for (let i = 0; i < arr.length; i++) {
        let student = arr[i];
        if (
            student.grades[0] === "A" &&
            student.grades[0] === "A" &&
            student.grades[0] === "A"
        ) {
            countOfStraightA++;
        }
    }
    return countOfStraightA;
}

//console.log(studentsGrade(arr));

// 2

function avarageAge(obj) {
    let totalAge = 0;
    for (const key in obj) {
        totalAge += obj[key];
    }
    const studentCount = Object.keys(obj).length;
    return totalAge / studentCount;
}

console.log(avarageAge({ Will: 34, Tom: 56, Smith: 43 }));
