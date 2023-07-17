const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
        genres: ["Fiction", "Classic", "Historical"],
        ratings: [
            { id: 1, score: 4.5 },
            { id: 2, score: 5 },
            { id: 3, score: 4.5 },
            { id: 4, score: 4.2 },
            { id: 5, score: 4 },
            { id: 6, score: 4.8 }
        ]
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublished: 1813,
        genres: ["Classic", "Romance"],
        ratings: [
            { id: 7, score: 4.8 },
            { id: 4, score: 4.5 },
            { id: 8, score: 4.2 },
            { id: 10, score: 5 },
            { id: 2, score: 4 }
        ]
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        yearPublished: 1954,
        genres: ["Fantasy", "Adventure"],
        ratings: [
            { id: 3, score: 4.9 },
            { id: 5, score: 4.5 },
            { id: 9, score: 4 },
            { id: 10, score: 5 },
            { id: 11, score: 4.8 },
            { id: 1, score: 4.7 }
        ]
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        yearPublished: 1988,
        genres: ["Fiction", "Philosophical"],
        ratings: [
            { id: 5, score: 4.5 },
            { id: 7, score: 4.8 },
            { id: 2, score: 4.7 },
            { id: 8, score: 5 },
            { id: 12, score: 4.5 }
        ]
    }
];

const users = [
    { name: "John", id: 1 },
    { name: "George", id: 2 },
    { name: "Mark", id: 3 },
    { name: "Alice", id: 4 },
    { name: "Sam", id: 5 },
    { name: "Smith", id: 6 },
    { name: "Will", id: 7 },
    { name: "Safia", id: 8 },
    { name: "Tom", id: 9 },
    { name: "Nancy", id: 10 },
    { name: "Lisa", id: 11 },
    { name: "Jim", id: 12 }
];

function findLibraryUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return "Library User with this ID number is not found!";
}

console.log(findLibraryUser(5));
console.log(findLibraryUser(15));
