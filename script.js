"use strict";
function start() {
    let number = prompt("Сколько фильмов вы уже посмотрели?", '').trim();
    while (true) {
        if (number !== '' & number !== null && number !== undefined && isNaN(+number) === false && +number !== 0) {
            if (+number < 0 || Number.isInteger(+number) === false) {
                number = Math.floor(Math.abs(number));
            }
            console.log('done');
            break;
        } 
         else {
            number = prompt("Сколько фильмов вы уже посмотрели?", '').trim();
        }   
    }
    return number;
}
const number = start();
function printRankOfSpectater() {
    if (+number < 10 && number >= 0) {
        document.write("Просмотрено довольно мало фильмов");
    } else if (+number > 10 && number < 30) {
        document.write("Вы классический зритель");
    } else if (+number > 30) {
        document.write("Вы киноман");
    }

} 

const PersonalMovieDB = {
    count: number,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (PersonalMovieDB.privat === false) {
    console.log(PersonalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i+1}`)
        PersonalMovieDB.genres.push(answer);
    }
}
function personalMovie() {
    for (let i = 0; i < number; i++) {
        let film = prompt("Один из последних просмотренных фильмов?", "");
        let mark = prompt("На сколько оцените его?", "");
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
}
showMyDB();
personalMovie();
writeYourGenres();
printRankOfSpectater();
console.log(PersonalMovieDB.movies);



