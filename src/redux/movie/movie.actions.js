import MOVIE_ACTION_TYPES from "./movie.action.types";
import axios from "axios";

export const searchMovies = (query) => async (dispatch) => {
    const path = "http://www.omdbapi.com/?s=" + query + "&apikey=2ae73c8e";
    const { data } = await axios.get(path);
    dispatch({ type: MOVIE_ACTION_TYPES.MOVIE_SEARCH_SUCCESS, payload: data });
}
