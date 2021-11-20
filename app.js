'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?'),
      c = +prompt('На сколько оцените его?'),
      b = prompt('Один из последних просмотренных фильмов?'),
      d = +prompt('На сколько оцените его?');


personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;
console.log(personalMovieDB);
