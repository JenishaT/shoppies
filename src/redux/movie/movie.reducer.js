import MOVIE_ACTION_TYPES from "./movie.action.types";
const INITIAL_STATE = {
    movies: null,
    nominations: []
};

const movieReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_ACTION_TYPES.MOVIE_SEARCH_SUCCESS:
            return {
                ...prevState,
                movies: action.payload.Search
            };
        case MOVIE_ACTION_TYPES.RETRIEVE_MOVIE_PLOT:
            let index = prevState.movies.findIndex(movie => movie.imdbID === action.payload.imdbID);
            prevState.movies[index].Plot = action.payload.Plot;
            return {
                ...prevState
            }
        case MOVIE_ACTION_TYPES.ADD_NOMINATION_SUCCESS:
            return {
                ...prevState,
                nominations: action.payload
            }
        case MOVIE_ACTION_TYPES.REMOVE_NOMINATION_SUCCESS:
            return {
                ...prevState,
                nominations: action.payload
            }
        case MOVIE_ACTION_TYPES.RESET_SUCCESS: {
            return {
                movies: null,
                nominations: []
            }
        }
        default:
            return prevState;
    }
};

export default movieReducer;