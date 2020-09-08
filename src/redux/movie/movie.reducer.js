import MOVIE_ACTION_TYPES from "./movie.action.types";
const INITIAL_STATE = {
  movies: null
};

const movieReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
      case MOVIE_ACTION_TYPES.MOVIE_SEARCH_SUCCESS:
        return {
          ...prevState,
          movies: action.payload.Search
        };
      default:
        return prevState;
    }
  };
  
  export default movieReducer;