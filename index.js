let numberOfFilms = prompt("сколько фильмов вы уже посмотрели?")
let movesViews = prompt("Какой последний фильм посмотрели?")
let movesGrade = prompt("Какую оценку вы бы поставили фильму?")



let PersonalMovie = { 
    count: numberOfFilms,
    moves: {
        [movesViews]: movesGrade 
        
    },
    actors: {},
    generes: {},
    privat: false,
}

PersonalMovie.moves[movesViews]
PersonalMovie.moves[movesGrade]
console.log(PersonalMovie)