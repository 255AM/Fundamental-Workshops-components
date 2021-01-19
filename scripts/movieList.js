import { copyMovieArrayFunction } from './dataSource.js'
import { eachMovieFunction } from './eachMovie.js'


//export let test = copyMovieArrayFunction()
 
export const htmlMovieList = () =>{
     //targe element on page to print to
     const targetElement = document.querySelector("#movies")
     //use copy of movies list for iteration
     const movies = copyMovieArrayFunction()

     // Generate all of the HTML for all of the movies. create an empty string for placeholder
     let moviesHtml = ""

     // iterate over the eachMovie variable, which is the copy of the original list of movies on the data page
     for (const currentMovie of movies){
         //build up the strin with html renditions of the objects
        moviesHtml += eachMovieFunction(currentMovie)
        
    }

    //print to screen
    targetElement.innerHTML += `
    ${moviesHtml}

    `




}