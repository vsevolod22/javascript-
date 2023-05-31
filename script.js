"use strict";
const PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        PersonalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", '').trim();
        while (true) {
            if (PersonalMovieDB.count !== '' & PersonalMovieDB.count !== null && PersonalMovieDB.count !== undefined && isNaN(+PersonalMovieDB.count) === false && +PersonalMovieDB.count !== 0) {
                if (+PersonalMovieDB.count < 0 || Number.isInteger(+PersonalMovieDB.count) === false) {
                    PersonalMovieDB.count = Math.floor(Math.abs(+PersonalMovieDB.count));
                }
                console.log('done');
                break;
            } 
             else {
                PersonalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", '').trim();
            }   
        }
        return PersonalMovieDB.count;
        },
    printRankOfSpectater: function() {
        if (+PersonalMovieDB.count < 10 && PersonalMovieDB.count >= 0) {
         document.write("Просмотрено довольно мало фильмов");
        } else if (+PersonalMovieDB.count > 10 && PersonalMovieDB.count < 30) {
            document.write("Вы классический зритель");
        } else if (+PersonalMovieDB.count > 30) {
            document.write("Вы киноман");
        }

    },
    
    showMyDB: function() {
        if (PersonalMovieDB.privat === false) {
        console.log(PersonalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i+1}`, "")
            while (true) {
                if (answer !== null && answer.trim() !== '' && answer !== undefined) {
                    console.log('done');
                    break;
                }
                else {
                    answer = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
                    console.log(answer);
                    continue;
                }   
            }
            PersonalMovieDB.genres.push(answer);
        }
    },
    personalMovie: function() {
        for (let i = 0; i < PersonalMovieDB.count; i++) {
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
    },
    toggleVisibleMyDB: function() {
        if (PersonalMovieDB.privat == false) {
            PersonalMovieDB.privat = true;
    }   else if (PersonalMovieDB.privat == true) {
        PersonalMovieDB.privat = false;
    }
    }
};


PersonalMovieDB.start();
PersonalMovieDB.showMyDB();
PersonalMovieDB.personalMovie();
PersonalMovieDB.writeYourGenres();
PersonalMovieDB.printRankOfSpectater();
PersonalMovieDB.toggleVisibleMyDB();
console.log(PersonalMovieDB.movies);



