export const eachMovieFunction = (movie) => {
    //movie is an argument. arbitrary name for each object that is iterated
    return   `
            <section class="movie_card">
                <div class = 'col col1'>
                    <div class="movie_id">${movie.id}</div>
                    <div class="movie_title">${movie.title}</div>
                </div>
                <div class='col col2'>
                <div class="movie_director">${movie.director}</div>
                </div>
                <div class='col col3'>
                    <div class="movie_image"><img src="${movie.image}" alt="Girl in a jacket" width="200" height="200"></div>
                </div>
                <div class='col col4'>
                    <div class="movie_rank">${movie.rank}</div>
                </div>
            </section>
            `
}

