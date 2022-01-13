// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (array) => {
  return array.filter((movie) => {
    const StevenSpielbergDirector = movie.director === 'Steven Spielberg';
    const DramaMovie = movie.genre.includes('Drama');
    return StevenSpielbergDirector && DramaMovie;
  }).length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let sum = arr.reduce(function(a, b){
    return a + (b.score || 0);
  },0);
  if(arr.length === 0){
    return 0;
  }
  let average = sum / arr.length

  
  average = average.toFixed(2);

  
  return Number(average);
  
}



// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (array) => {
  const drama = array.filter((movie) => movie.genre.includes('Drama'));
  const avarageDramaScore = scoresAverage(drama);
  
  return avarageDramaScore;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  let newArr = [...arr];
  let byYear = newArr.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year < b.year) {
      return 1;
    } else return a.title.localeCompare(b.title);
  });
  return byYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.map(element => element.title).sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
