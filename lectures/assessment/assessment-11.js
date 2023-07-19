// Problem 1

/*
  Write a function that will print the name of all the students
  Example:
  printNames(students1)
  Mike
  Sarah
  Jessica
  */

function printNames(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].name);
    }
}
let students1 = [{ name: "Mike" }, { name: "Sarah" }, { name: "Jessica" }];

// printNames(students1); // Uncomment when ready to test

// Problem 2

/*
  Write a function that will print the name and id of all the students
  Example:
  printStudents(students2)
  Mike is student #0
  Sarah is student #1
  Jessica is student #2
  */
let students2 = [
    {
        name: "Mike",
        id: 0
    },
    {
        name: "Sarah",
        id: 1
    },
    {
        name: "Jessica",
        id: 2
    }
];

function printStudents(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`${students[i].name} is student #${i}`);
    }
}

// printStudents(students2); // Uncomment when ready to test

// Problem 3

/*
  Write a function that will print the name of the student and their highest test score
  Example:
  printBestGrade(students3)
  Mike 84
  Sarah 100
  Jessica 92
  */
let students3 = [
    {
        name: "Mike",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Sarah",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Jessica",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 49 }
        ]
    }
];

function printBestGrade(students) {
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let gradesArr = student.grades;
        let maxGrade = gradesArr[0].score;

        for (let j = 1; j < gradesArr.length; j++) {
            if (maxGrade < gradesArr[j].score) {
                maxGrade = gradesArr[j].score;
            }
        }

        console.log(`${student.name} ${maxGrade}`);
    }
}

// printBestGrade(students3); // Uncomment when ready to test

// Problem 4
/*
  Write a function that will print the name of the student and their average test score
  Example:
  printAverageGrade(students3)
  Mike 61.333333333333336
  Sarah 72.66666666666667
  Jessica 73.33333333333333
  */
let students4 = [
    {
        name: "Mike",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Sarah",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Jessica",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 49 }
        ]
    }
];

function printAverageGrade(students) {
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let gradesArr = student.grades;
        let sumGrade = 0;

        for (let j = 0; j < gradesArr.length; j++) {
            sumGrade += gradesArr[j].score;
        }
        let averageGrade = sumGrade / gradesArr.length;
        console.log(`${student.name} ${averageGrade}`);
    }
}

// printAverageGrade(students4); // Uncomment when ready to test

/* ------------------------------------------------------------------- */

// Problem 5
// Create the data object that this function is expecting

/*
Example:
printUsers(users1)
0: UserName1
1: UserName2
...and so forth, for all the users
*/

let users1 = [
    {
        id: 1,
        username: "John"
    },
    {
        id: 2,
        username: "Ann"
    },
    {
        id: 3,
        username: "Mark"
    },
    {
        id: 4,
        username: "Lisa"
    },
    {
        id: 5,
        username: "Dan"
    }
];

function printUsers(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`${user.id}: ${user.username}`);
    }
}
// printUsers(users1); // Uncomment when ready to test

// Problem 6
//Create the data object that this function is expecting

/*
  Example:
  printUsersWebsites(users2)
  ~~UserName1~~
    -siteName1
    -siteName2
  ~~UserName2~~
    -siteName3
    -siteName4
    -siteName5
  ...and so forth, for all the users
  */

let users2 = [
    {
        username: "UserName1",
        sites: [{ url: "siteName1" }, { url: "siteName2" }]
    },
    {
        username: "UserName2",
        sites: [
            { url: "siteName3" },
            { url: "siteName4" },
            { url: "siteName5" }
        ]
    }
];

function printUsersWebsites(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`~~${user.username}~~`);
        for (let j = 0; j < user.sites.length; j++) {
            let site = user.sites[j];
            console.log(`  -${site.url}`);
        }
    }
}
// printUsersWebsites(users2); // Uncomment when ready to test

//Problem 7
//Create the data object that this function is expecting
/*
  Example:
  printUsersWebsitesInfo(users3)
  ~~UserName1~~
    -siteName1.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
    -siteName2.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
  ~~UserName2~~
    -siteName3.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
    -siteName4.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
    -siteName5.com
      -load: 21%
      -# of users: 210000
      -popularity score: 32
  ...and so forth, for all the users
  */

let users3 = [
    {
        username: "UserName1",
        sites: [
            {
                url: "siteName1.com",
                load: "21%",
                usersCount: 210000,
                pop: 32
            },
            {
                url: "siteName2.com",
                load: "21%",
                usersCount: 210000,
                pop: 32
            }
        ]
    },
    {
        username: "UserName2",
        sites: [
            {
                url: "siteName3.com",
                load: "21%",
                usersCount: 210000,
                pop: 32
            },
            {
                url: "siteName4.com",
                load: "21%",
                usersCount: 210000,
                pop: 32
            },
            {
                url: "siteName5.com",
                load: "21%",
                usersCount: 210000,
                pop: 32
            }
        ]
    }
];

function printUsersWebsitesInfo(users) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        console.log(`~~${user.username}~~`);
        for (let j = 0; j < user.sites.length; j++) {
            let site = user.sites[j];
            console.log(`  -${site.url}`);
            console.log(`    -load: ${site.load}%`);
            console.log(`    -# of users: ${site.userCount}`);
            console.log(`    -popularity score: ${site.pop}`);
        }
    }
}

// printUsersWebsitesInfo(users3); // Uncomment when ready to test

//Problem 8
//Write a function that will print the id of each test and the name of the student
//who got the highest scores
//Example

// Test 0: Anthony
// Test 1: Pawandeep
// Test 2: Winnie
let students7 = [
    {
        name: "Anthony",
        id: 0,
        grades: [
            { id: 0, score: 84 },
            { id: 1, score: 20 },
            { id: 2, score: 80 }
        ]
    },
    {
        name: "Winnie",
        id: 1,
        grades: [
            { id: 0, score: 62 },
            { id: 1, score: 56 },
            { id: 2, score: 100 }
        ]
    },
    {
        name: "Pawandeep",
        id: 2,
        grades: [
            { id: 0, score: 79 },
            { id: 1, score: 92 },
            { id: 2, score: 49 }
        ]
    }
];
function printBestStudent(students) {
    for (let i = 0; i < students[0].grades.length; i++) {
        let maxGrade = students[0].grades[i].score;
        let bestStudent = students[0].name;

        for (let j = 1; j < students.length; j++)
            if (maxGrade < students[j].grades[i].score) {
                maxGrade = students[j].grades[i].score;
                bestStudent = students[j].name;
            }
        console.log(`Test ${i}: ${bestStudent}`);
    }
}

// printBestStudent(students7);
