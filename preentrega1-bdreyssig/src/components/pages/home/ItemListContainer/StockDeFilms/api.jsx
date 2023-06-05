/*import React from "react";


export const getMovies=async()=>{

const response= await fetch('https://api.themoviedb.org/3/person/popular?api_key=0bc2b3619ac231ad6ce364b6d8015ab' )
const data =await response.json();
//console.log (data)
return data.results;

} ;*/

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1?';
const getMovies= {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '223fd0dc0fmshb977a6b024051bcp189987jsn16c530e70f37',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, getMovies);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}