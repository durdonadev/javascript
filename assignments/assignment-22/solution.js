let movie = {
    title: "Avatar",
    director: "James Cameron",
    releaseYear: 2009,
    genre: "epic science fiction",
    rating: 7.9
};

console.log(movie.title);
console.log(movie.director);
console.log(movie.releaseYear);
console.log(movie.genre);
console.log(movie.rating);
console.log("------------");

console.log(movie["title"]);
console.log(movie["director"]);
console.log(movie["releaseYear"]);
console.log(movie["genre"]);
console.log(movie["rating"]);

console.log(movie.producer); // undefined

movie.rating = 8;
console.log(movie.rating);

movie.boxOffice = "$2,923,706,026";
console.log(movie.boxOffice);
delete movie.boxOffice;
console.log(movie.boxOffice);

function movieFunction(movie) {
    console.log(
        `The movie ${movie.title} was directed by ${movie.director} and was released in ${movie.releaseYear}. It is a/an ${movie.genre} film with a rating of ${movie.rating}.`
    );
}
movieFunction(movie);
