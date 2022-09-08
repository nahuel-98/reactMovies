const initialState = {
    moviesLoaded: [],
    moviesFavorites: [],
    movieDetail: {}
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state, moviesLoaded: action.payload
            }
        case 'GET_MOVIE_DETAIL':
            return {
                ...state,
                movieDetail: action.payload
            }
        case 'ADD_MOVIE_FAVORITE':
            return {
                    ...state,
                    moviesFavorites: [...state.moviesFavorites,action.payload] //De esta forma lo concatemanamos. state.moviesFavorites.concat(action.payload)
                }
        case 'REMOVE_MOVIE_FAVORITE':
            return {
                    ...state, 
                    moviesFavorites: state.moviesFavorites.filter(f => f.id !== action.id)

                }
        default:
            return state;
        }
    }