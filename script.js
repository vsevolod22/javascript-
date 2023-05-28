"use strict";
const number = prompt("Сколько фильмов вы уже посмотрели?", '');
const PersonalMovieDB = {
    count: number,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const film = prompt("Один из последних просмотренных фильмов?", "");
const mark = prompt("На сколько оцените его?", "");
PersonalMovieDB.movies[film] = mark;
console.log(PersonalMovieDB.movies)





