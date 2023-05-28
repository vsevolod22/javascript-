"use strict";
let number = prompt("Сколько фильмов вы уже посмотрели?", '');
while (true) {
    if (number === '' || number === null || number === undefined || isNaN(+number)) {
        number = prompt("Сколько фильмов вы уже посмотрели?", "");       
    } else if (+number < 10) {
        document.write("Просмотрено довольно мало фильмов");
        break;
    } else if (+number > 10 && number < 30) {
        document.write("Вы классический зритель");
        break;
    } else if (+number > 30) {
        document.write("Вы киноман");
        break;
    }

}
const PersonalMovieDB = {
    count: number,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < number; i++) {
    let film = prompt("Один из последних просмотренных фильмов?", "");
    let mark = prompt("На сколько оцените его?", "");
    console.log(+mark);
    while (true) {
        if (film === '' || film === null || film === undefined || film.length > 50) {  
            film = prompt("Один из последних просмотренных фильмов?", "");      
        }
        else if (mark === '' || mark === null || mark === undefined || +mark > 10 || isNaN(+mark)) {
            mark = prompt("На сколько оцените его?", "");       
        }
        else {
            PersonalMovieDB.movies[film] = mark;
            break;
        }
    }
}
console.log(PersonalMovieDB.movies);

