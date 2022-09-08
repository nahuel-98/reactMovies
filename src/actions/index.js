export function getMovies(title){
    return function (dispatch) {
        return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=329ec91d&s=${title}`)
            .then(response => response.json()) //Lo transformo en un objeto con .json()
            .then(movies => dispatch({type:'GET_MOVIES', payload: movies.Search})) //payload es un nombre cualquiera, no significa nada. movies tiene el objeto con la info de las pelis.
    }
}
//El action creator lo invoca el componente

export function getMovieDetail(id){
    return function (dispatch){
        return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
            .then(response => response.json())
            .then(detail => dispatch({type: 'GET_MOVIE_DETAIL', payload: detail}))
    }
}

export function addMovieFavorite(movie){
    return {
        type: 'ADD_MOVIE_FAVORITE', payload: movie
    }
}

export function removeMovieFavorite(id){
    return {
        type: 'REMOVE_MOVIE_FAVORITE' , id
    }
}