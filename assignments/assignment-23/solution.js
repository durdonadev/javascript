let movieCollection = {
    movies: [],
    moviesTheSameGenre: [],

    // 1. Create addMovie method
    addMovie: function (title, director, genre, year) {
        let movie = {
            title: title,
            director: director,
            genre: genre,
            year: year
        };
        this.movies.push(movie);
    },

    // 2. Create getMovieByTitle method
    getMovieByTitle: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                return this.movies[i];
            }
        }
    },

    // 3. Create getMoviesByGenre method
    getMoviesByGenre: function (genre) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                this.moviesTheSameGenre.push(this.movies[i]);
            }
        }
        return this.moviesTheSameGenre;
    },

    // 4. Create updateMovie method
    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                (this.movies[i].director = update.director),
                    (this.movies[i].genre = update.genre),
                    (this.movies[i].year = update.year);
                return this.movies[i];
            }
        }
    },

    // 5. Create deleteMovie method
    deleteMovie: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                // delete this.movies[i];

                this.movies.splice(i, 1);
            }
        }
    },

    // 6. Create printMovies method
    printMovies: function () {
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`Title: ${this.movies[i].title}`);
            console.log(`Director: ${this.movies[i].director}`);
            console.log(`Genre: ${this.movies[i].genre}`);
            console.log(`Year: ${this.movies[i].year}`);
            console.log("-------------------");
        }
    }
};

// 1. addMovie method
movieCollection.addMovie(
    "The Shawshank Redemption",
    "Frank Darabont",
    "Drama",
    1994
);
movieCollection.addMovie(
    "Inception",
    "Christopher Nolan",
    "Science Fiction",
    2010
);
movieCollection.addMovie("Avatar", "James Cameron", "Science Fiction", 2009);

movieCollection.addMovie("The Big Short", "Adam McKay", "Drama", 2015);
// console.log(movieCollection);

// 2. getMovieByTitle method
// console.log(movieCollection.getMovieByTitle("Avatar"));

// 3. getMoviesByGenre method
// console.log(movieCollection.getMoviesByGenre("Drama"));

// 4. updateMovie method
// console.log(
//     movieCollection.updateMovie("Avatar", {
//         director: "John Doe",
//         genre: "Action",
//         year: 2022
//     })
// );

// 5. deleteMovie method
// movieCollection.deleteMovie("Inception");
// console.log(movieCollection);

// 6. printMovies method
movieCollection.printMovies();
