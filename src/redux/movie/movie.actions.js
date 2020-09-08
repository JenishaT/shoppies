import MOVIE_ACTION_TYPES from "./movie.action.types";
import axios from "axios";

export const searchMovies = (query) => async (dispatch) => {
    const path = "http://www.omdbapi.com/?type=movie&s=" + query + "&apikey=2ae73c8e";
    const { data } = await axios.get(path);
    dispatch({ type: MOVIE_ACTION_TYPES.MOVIE_SEARCH_SUCCESS, payload: data });
}

export const getMovieInfo = (id) => async (dispatch) => {
    const path = "http://www.omdbapi.com/?plot=short&i=" + id + "&apikey=2ae73c8e";
    const { data } = await axios.get(path);
    dispatch({ type: MOVIE_ACTION_TYPES.RETRIEVE_MOVIE_PLOT, payload: data });
}

export const addNomination = (id) => async (dispatch, getState) => {
    let nominations = getState().movie.nominations;
    if (!nominations.some(nomination => nomination.imdbID === id) || nominations.length === 0) {
        const path = "http://www.omdbapi.com/?plot=short&i=" + id + "&apikey=2ae73c8e";
        const { data } = await axios.get(path);
        nominations.push(data);
        dispatch({ type: MOVIE_ACTION_TYPES.ADD_NOMINATION_SUCCESS, payload: nominations });
    }
}
